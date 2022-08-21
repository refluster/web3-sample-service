import express from 'express';
import controller from '../controller/walletController';

const router = express.Router({
	mergeParams: true,
});

router.route('/:address')
	.get(controller.walletRead)

export default router;
