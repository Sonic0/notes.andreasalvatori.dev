#!/usr/bin/env node
import * as dotenv from 'dotenv'
dotenv.config()
import * as cdk from 'aws-cdk-lib'
import { SiteStack } from '../lib/main-stack'
import { CertificateStack } from '../lib/cert-stack-us'
import { Monitoring } from '../lib/monitoring-us'

const app = new cdk.App()

const deployEnv: string = app.node.tryGetContext('deploy-env') || 'prod'
const domainName: string = app.node.tryGetContext('infraStaticConfs')['subDomainName'] ?? ''

const sharedProps: cdk.StackProps = {
  tags: {
    "env": deployEnv,
    "resource": `${domainName}`
  }
}

const certEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1',
};

const { certificate, ImportedR53HostedZone } = new CertificateStack(
  app, `Blog-Certificate-${deployEnv}-US`, { 
    ...sharedProps,
    env: certEnv,
    crossRegionReferences: true,
    deployEnv,
    domainName,
  }
)

const siteEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'eu-central-1',
};
const { bucket, distribution, notificationsEmail } = new SiteStack(
  app, `Blog-${domainName.replaceAll(".", "-")}-${deployEnv}`, {
    ...sharedProps,
    env: siteEnv,
    crossRegionReferences: true,
    deployEnv,
    domainName,
    R53HostedZone: ImportedR53HostedZone,
    certificate
  }
)

new Monitoring(
  app, `Blog-Monitoring-${deployEnv}-US`, { 
    ...sharedProps,
    env: certEnv,
    crossRegionReferences: true,
    deployEnv,
    distribution,
    notificationsEmail: notificationsEmail
  }
)