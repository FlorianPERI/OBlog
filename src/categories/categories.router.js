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

export default router;
