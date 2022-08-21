import express from 'express';
import itemRoute from './itemRoute';

const indexRoute = express.Router({
	mergeParams: true,
});

indexRoute.use((req, res, next) => {
	console.log('Time: ', new Date().toISOString());
	console.log(`${req.ip} tried to reach ${req.originalUrl}`);
	next();
});

indexRoute.use('/item', itemRoute);

export default indexRoute;
