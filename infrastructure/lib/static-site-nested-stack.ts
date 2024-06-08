import type { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import { aws_cloudfront as cf, CfnOutput, Duration } from 'aws-cdk-lib'
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as iam from 'aws-cdk-lib/aws-iam'
import * as route53 from 'aws-cdk-lib/aws-route53'

export interface StackResources {
  readonly deployEnv: string,
  readonly domainName: string,
  readonly certificate: acm.ICertificate,
  route53Zone: route53.IHostedZone
}

export class StaticSiteStack extends cdk.NestedStack {
  bucket: s3.Bucket
  distribution: cf.Distribution
  
  constructor(scope: Construct, id: string, props: cdk.NestedStackProps & StackResources) {
    super(scope, id, props)

    const isProd = props?.deployEnv === 'prod'
    
    // Code S3 Bucket
    this.bucket = new s3.Bucket(this, 'BlogBucket', {
      bucketName: `${props.domainName}-${props?.deployEnv}`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: isProd ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: ! isProd,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true
    })
    new CfnOutput(this, 'OutoutBlogBucket', {
      description: 'Bucket containing blog posts',
      value: this.bucket.bucketName,
      exportName: 'BlogBucketName'
    });

    // Blog Log Bucket
    const LogBucket = new s3.Bucket(this, 'CFLogBucket', {
      bucketName: `${props.domainName}-${props?.deployEnv}-logs`,
      accessControl: cdk.aws_s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      objectOwnership: cdk.aws_s3.ObjectOwnership.OBJECT_WRITER,
      lifecycleRules: [{
        transitions: [{
          storageClass: s3.StorageClass.DEEP_ARCHIVE,
          transitionAfter: cdk.Duration.days(15)
        }],
        expiration: Duration.days(30)
      }]
    })

    // CF OAI (Legacy). AOC is not currently supported with CDK. Check this out in the future.
    const originAccessIdentity = new cf.OriginAccessIdentity(this, 'CfOriginAccessIdentity')

    this.bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: [
          's3:GetObject'
        ],
        resources: [
          this.bucket.arnForObjects('*')
        ],
        principals: [
          new iam.CanonicalUserPrincipal(
            originAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId
          ),
        ],
      })
    )

    // 'Rewrite Urls' CloudFront Function
    const optionsRewriteUrls: cf.FileCodeOptions = { filePath: './functions/cloudfront/cff_rewrite_url.js' }
    const cffRewriteUrls = new cf.Function(this, 'FunctionRewriteUrls', {
      functionName: 'rewrite-url',
      code: cf.FunctionCode.fromFile(optionsRewriteUrls),
      comment: 'To rewrite requests based on url path.'
    })
    const functionAssociation: cf.FunctionAssociation = {
      eventType: cf.FunctionEventType.VIEWER_REQUEST,
      function: cffRewriteUrls,
    };

    this.distribution = new cf.Distribution(this, 'BlogCfDistribution', {
      comment: `${props.domainName}-${props.deployEnv}`,
      defaultRootObject: 'index.html',
      defaultBehavior: {
        functionAssociations: [ functionAssociation ],
        origin: new origins.S3Origin(this.bucket, { originAccessIdentity }),
        originRequestPolicy: cf.OriginRequestPolicy.CORS_S3_ORIGIN,
        responseHeadersPolicy: cf.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS_WITH_PREFLIGHT_AND_SECURITY_HEADERS,
        viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        compress: true,
        allowedMethods: cf.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      },
      priceClass: cf.PriceClass.PRICE_CLASS_100,
      domainNames: [props.domainName, `www.${props.domainName}`],
      certificate: props.certificate,
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: '/404.html'
        }
      ],
      minimumProtocolVersion: cf.SecurityPolicyProtocol.TLS_V1_2_2021,
      httpVersion: cf.HttpVersion.HTTP2_AND_3,
      enableLogging: true,
      logBucket: LogBucket,
      logFilePrefix: 'cf-access-logs'
    })

    // Outputs
    new cdk.CfnOutput(this, 'SiteBucketArn', { value: this.bucket.bucketArn })
    new cdk.CfnOutput(this, 'LogBucketArn', { value: LogBucket.bucketArn })
    new cdk.CfnOutput(this, 'DistributionId', { value: this.distribution.distributionId })
  }
}
