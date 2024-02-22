import { Router } from 'express';
const router = Router();

import postRouter from './posts/posts.router.js';
import categoryRouter from './categories/categories.router.js';

import errorsService from './services/errors/errors.handler.js';

router.use(categoryRouter);
router.use(postRouter);

router.use(errorsService._404);
router.use(errorsService.manageError);

export default router;
