import { Router } from 'express';
const router = Router();
import { postController } from '../app.controller.js';
import validationService from '../services/validations/validations.posts.js';

router.get('/posts', postController.findAll);

router.get('/posts/:id(\\d+)', postController.findOne);

router.get('/posts/category/:id(\\d+)', postController.findOneCategory);

router.post('/posts', validationService.validateAddPost, postController.create);

router.patch(
    '/posts/:id(\\d+)',
    validationService.validateUpdatePost,
    postController.update
);

router.delete('/posts/:id(\\d+)', postController.delete);

export default router;
