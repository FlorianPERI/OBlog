import { Router } from 'express';
const router = Router();
import { categoryController } from '../app.controller.js';
import validationService from '../services/validations/validations.posts.js';

router.get('/categories', categoryController.findAll);

router.get('/categories/:id(\\d+)', categoryController.findOne);

router.post(
    '/categories',
    validationService.validateAddCategory,
    categoryController.create
);

router.patch(
    '/categories/:id(\\d+)',
    validationService.validateUpdateCategory,
    categoryController.update
);

router.delete('/categories/:id(\\d+)', categoryController.delete);

export default router;
