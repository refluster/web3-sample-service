import express from 'express';
import walletRoute from './walletRoute';

const indexRoute = express.Router({
	mergeParams: true,
});

indexRoute.use((req, res, next) => {
	console.log('Time: ', new Date().toISOString());
	console.log(`${req.ip} tried to reach ${req.originalUrl}`);
	next();
});

indexRoute.use('/wallet', walletRoute);

export default indexRoute;
