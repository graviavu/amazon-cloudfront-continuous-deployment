// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0


export const PipelineInputVariables = {
  // Pipeline variables
  PIPELINE_CODE_REPO: "graviavu/amazon-cloudfront-continuous-deployment",
  PIPELINE_CODE_BRANCH: "main",
  

  PIPELINE_NAME: "cloudfront-cd-pipeline",
  // prefix
  STEP_FUNCTION_NAME: "CFCDPipelineStepFunction",

  ENABLE_CONTINUOUS_DEPLOYMENT: false,
  HEADER_BASED_TRAFFIC_CONFIG: true,

  // site access logs bucket name
  LOG_BUCKET_NAME: "mysite-logs",
};

export const pipelineConnectionArn: (account: string) => string = (
  account: string
) => `arn:aws:codeconnections:us-east-1:${account}:connection/4ffd1ec2-cef5-4c7b-91b2-d7d68c45258d`;

export const PipelineExportNames = {
  STEP_FUNCTION_ROLE_ARN: `${PipelineInputVariables.PIPELINE_NAME}-cd-pipeline-stepfunction-roleArn`,

  PRIMARY_DISTRIBUTION_ID: `${PipelineInputVariables.PIPELINE_NAME}-primary-distribution-id`,

  STAGING_DISTRIBUTION_ID: `${PipelineInputVariables.PIPELINE_NAME}-staging-distribution-id`,
  DEPLOYMENT_POLICY_ID: `${PipelineInputVariables.PIPELINE_NAME}-staging-deployment-policy-id`,
};
