import { Router } from 'express';
const router = Router();
import { postController } from '../app.controller.js';

router.get('/posts', postController.findAll);
router.get('/posts/:id', postController.findOne);
router.get('/posts/category/:id', postController.findOneCategory);
router.post('/posts', postController.create);

export default router;
