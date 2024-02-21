import { Router } from 'express';
const router = Router();
import { categoryController } from '../controllers/index.js';

router.get('/categories', categoryController.findAll);

export default router;
