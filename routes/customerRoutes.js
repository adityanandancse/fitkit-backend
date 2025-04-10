import express from 'express';
import { addCustomer, getAllCustomers } from '../controllers/customerController.js';

const router = express.Router();

router.post('/', addCustomer);
router.get('/', getAllCustomers);

export default router;