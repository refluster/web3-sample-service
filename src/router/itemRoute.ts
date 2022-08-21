import express from 'express';
import controller from '../controller/itemController';

const router = express.Router({
	mergeParams: true,
});

router.route('/')
	.post(controller.itemCreate)

router.route('/:id')
	.get(controller.itemRead)
	.put(controller.itemUpdate)
	.delete(controller.itemDelete)

export default router;
