
const walletRead = async (req, res) => {
	console.log('>>> Entering wallet read >> ', req.body);
	try {
		const address = req.params.address;
		console.log('address', address);
		return res.send({address});
	} catch(err) {
		console.log('error', err);
		return res.status(500).send({ message: 'Internal error' });
	}
};

export default {
	walletRead,
};
