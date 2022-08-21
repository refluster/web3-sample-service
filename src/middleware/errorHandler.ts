/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
	console.error(`errorHandler  errormessage ||>> ${err.message}`);
	console.error(` errorHandler errorCode ||>> ${err}`);
	// eslint-disable-next-line no-param-reassign
	err.statusCode = err.status || 500;
	res.status(err.statusCode).send({
		errorcode: err.ErrorCode || 'UnknownError',
		errormessage: err.message,
	});
};

export default errorHandler;
