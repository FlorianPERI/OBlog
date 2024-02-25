import { Router } from 'express';
const router = Router();

import postRouter from './posts/posts.router.js';
import categoryRouter from './categories/categories.router.js';

import errorsService from './services/errors/errors.handler.js';

router.use(categoryRouter);
router.use(postRouter);

// Handle 404 errors
router.use(errorsService._404);

// Handle other errors using the custom error handling middleware
router.use(errorsService.manageError);

export default router;
