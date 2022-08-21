import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { Item } from 'item.d';

const tableName = process.env.TABLE_NAME;

export const dynamoDb = new AWS.DynamoDB.DocumentClient({
	api_version: '2012-08-10',
	region: 'us-west-2',
});

const createItem = async (item: ItemInput) => {
	const data: Item = {
		id: uuidv4(),
		...item,
	};
	await dynamoDb.put({
		TableName: tableName,
		Item: data,
	}).promise();
	return {
		id: data.id,
	}
};

const readItem = async (id: string) => {
	const res = await dynamoDb.get({
		TableName: tableName,
		Key: {
			id,
		}
	}).promise();
	const ret: Item = res.Item;
	return ret;
};

const updateItem = async (id: string, item: Item) => {
	const data: Item = {
		id,
		...item,
	};
	const res = await dynamoDb.put({
		TableName: tableName,
		Item: data,
	}).promise();
	return data;
};

const deleteItem = async (id: string) => {
	const res = await dynamoDb.delete({
		TableName: tableName,
		Key:{
			id,
		},
	}).promise();
	return true;
};

export default {
	createItem,
	readItem,
	updateItem,
	deleteItem,
};
