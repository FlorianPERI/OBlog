import { Router } from 'express';
const router = Router();
import { postController } from '../controllers/index.js';

router.get('/posts', postController.findAll);

export default router;
