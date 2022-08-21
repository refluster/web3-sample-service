/* eslint-disable no-console */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import indexRoute from './router/indexRoute';
import errHandlerMiddleware from './middleware/errorHandler';

const app = express();

// Use cors
app.use(cors());
app.options('*', cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true,
}));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Authorization,x-api-key,ClientId,Accept-Language');
	next();
});

app.use(helmet());

app.get('/', (req, res, next) => {
	console.error(`${req.ip} tried to reach ${req.originalUrl}`);
	const err = new Error(`${req.ip} tried to reach ${req.originalUrl}`);
	err.statusCode = 404;
	next(err);
});

app.use('', indexRoute);
//app.use('/v1', indexRoute);

// this should be last statement before export app
app.use(errHandlerMiddleware);
export default app;
