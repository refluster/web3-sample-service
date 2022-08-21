import table from '../lib/table';
import { Item } from '../lib/item.d';

const itemCreate = async (req, res) => {
	console.log('>>> Entering create item >> ', req.body);
	try {
		const data: Item = req.body;
		const ret = await table.createItem(req.body);
		return res.send(ret);
	} catch(err) {
		console.log('error', err);
		return res.status(400).send({ message: 'error' });
	}
};

const itemRead = async (req, res) => {
	console.log('>>> Entering read item >> ', req.body);
	try {
		const id = req.params.id;
		const ret = await table.readItem(id);
		if (ret === undefined) {
			return res.status(404).send({ message: 'Item not found' });
		}
		return res.send(ret);
	} catch(err) {
		console.log('error', err);
		return res.status(500).send({ message: 'Internal error' });
	}
};

const itemUpdate = async (req, res) => {
	console.log('>>> Entering update item >> ', req.body);
	try {
		const id = req.params.id;
		const old = await table.readItem(id);
		if (old === undefined) {
			return res.status(404).send({ message: 'Item not found' });
		}
		const ret = await table.updateItem(id, req.body);
		res.send(ret);
	} catch(err) {
		console.log('error', err);
		return res.status(400).send({ err });
	}
};

const itemDelete = async (req, res) => {
	console.log('>>> Entering delete item >> ', req.body);
	try {
		const id = req.params.id;
		const old = await table.readItem(id);
		if (old === undefined) {
			return res.status(404).send({ message: 'Item not found' });
		}
		const ret = await table.deleteItem(id);
		return res.send({
			success: true
		});
	} catch(err) {
		console.log('error', err);
		return res.status(400).send({ err });
	}
};

export default {
	itemCreate,
	itemRead,
	itemUpdate,
	itemDelete,
};
