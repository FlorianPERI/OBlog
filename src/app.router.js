import { Router } from 'express';
const router = Router();

import postRouter from './posts/posts.router.js';
import categoryRouter from './categories/categories.router.js';

//import errorService from '../services/errorHandler.js';

router.use(categoryRouter);
router.use(postRouter);

// router.use(errorService._404);
// router.use(errorService.manageError);

export default router;
