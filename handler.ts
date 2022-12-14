import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import serverless from 'serverless-http';
import app from './app';

export const handler: APIGatewayProxyHandler = serverless(app);
