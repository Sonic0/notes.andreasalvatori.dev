import type { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import { aws_cloudfront as cf, aws_route53_patterns, CfnOutput, Duration } from 'aws-cdk-lib'
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import * as route53 from 'aws-cdk-lib/aws-route53'

export interface StackResources {
  deployEnv: string,
  domainName: string,
  mainDomainName: string
}

export class CertificateStack extends cdk.Stack {
  certificate: acm.Certificate
  ImportedR53HostedZone: route53.IHostedZone

  constructor(scope: Construct, id: string, props: cdk.StackProps & StackResources) {
    super(scope, id, props)
    
    this.ImportedR53HostedZone = route53.HostedZone.fromLookup(this, 'R53Zone', { domainName: props.mainDomainName });

    this.certificate = new acm.Certificate(this, 'BlogCertificate', {
      domainName: props.domainName,
      subjectAlternativeNames: [`www.${props.domainName}`],
      validation: acm.CertificateValidation.fromDns(this.ImportedR53HostedZone)
    })
    new CfnOutput(this, 'Certificate', { value: this.certificate.certificateArn })

  }
}
