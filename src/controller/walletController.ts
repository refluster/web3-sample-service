import Web3 from 'web3';

const rpcURL = 'https://mainnet.infura.io/v3/bdf39bb92e924dfe83c0818fd206bd58';
const apikey = 'bdf39bb92e924dfe83c0818fd206bd58';
const web3 = new Web3(rpcURL);

const walletRead = async (req, res) => {
	console.log('>>> Entering wallet read >> ', req.body);
	try {
		const address = req.params.address;

		const wei = await web3.eth.getBalance(address);
		const balance = web3.utils.fromWei(wei, 'ether')

		console.log('address', address);
		return res.send({balance});
	} catch(err) {
		console.log('error', err);
		return res.status(500).send({ message: 'Internal error' });
	}
};

export default {
	walletRead,
};
