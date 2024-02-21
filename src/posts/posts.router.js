import { Router } from 'express';
const router = Router();
import { postController } from '../app.controller.js';

router.get('/posts', postController.findAll);

export default router;
