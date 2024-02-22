import { Router } from 'express';
const router = Router();
import { postController } from '../app.controller.js';

/**
 * @openapi
 * components:
 *  schemas:
 *   Posts:
 *     type: object
 *     required:
 *       - title
 *       - slug
 *       - content
 *       - excerpt
 *       - category
 *     properties:
 *       title:
 *         type: string
 *       slug:
 *         type: string
 *       content:
 *         type: string
 *       excerpt:
 *         type: string
 *       category:
 *         type: string
 *     example:
 *       title: Dis donc, que des questions ?
 *       slug: dis-donc-questions
 *       content: Dis donc, que des questions ? Excepteur sint occaecat cupidatat non proident
 *       excerpt: Excepteur sint occaecat <strong>cupidatat</strong> non proident, sunt in culpa qui
 *       category: React
 *
 *
 *
 */

/**
 * @openapi
 * /posts:
 *   get:
 *     description: Retrieve all posts
 *     tags:
 *       - Posts
 *     produces:
 *        - application/json
 *     responses:
 *       200:
 *         description: retrieved all posts
 */
router.get('/posts', postController.findAll);

/**
 * @openapi
 * /posts/{id}:
 *   get:
 *     description: Retrieve one post from its ID
 *     tags:
 *       - Posts
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: id
 *          in: path
 *          description: ID of post that needs to be fetched
 *          required: true
 *          type: integer
 *     responses:
 *       200:
 *         description: retrieved one post
 */
router.get('/posts/:id(\\d+)', postController.findOne);
/**
 * @openapi
 * /posts/category/{id}:
 *   get:
 *     description: Retrieve all posts with a specific category ID
 *     tags:
 *       - Posts
 *     produces:
 *        - application/json
 *     parameters:
 *        - name: id
 *          in: path
 *          description: ID of category that needs to be fetched from posts
 *          required: true
 *          type: integer
 *     responses:
 *       200:
 *         description: retrieved one post
 */
router.get('/posts/category/:id(\\d+)', postController.findOneCategory);
/**
 * @openapi
 * /posts:
 *   post:
 *     description: Add new post
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Posts'
 *     produces:
 *        - application/json
 *     responses:
 *       200:
 *         description: new post created
 *       400:
 *         description: erorr with send data
 */
router.post('/posts', postController.create);

export default router;
