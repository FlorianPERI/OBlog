import { Router } from 'express';
const router = Router();
import { categoryController } from '../app.controller.js';
import validationService from '../services/validations/validations.posts.js';

/**
 * @openapi
 * /categories:
 *   get:
 *     description: Retrieve all categories
 *     tags:
 *       - Categories
 *     produces:
 *        - application/json
 *     responses:
 *       200:
 *         description: retrieved all categories
 */
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
