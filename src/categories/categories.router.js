import { Router } from 'express';
const router = Router();
import { categoryController } from '../app.controller.js';

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
router.post('/categories');
router.get('categories/:id');
router.patch('categories/:id');
router.delete('categories/:id');
export default router;
