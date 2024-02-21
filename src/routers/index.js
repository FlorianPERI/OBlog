import { Router } from 'express';
const router = Router();

import postRouter from './postRouter.js';
import categoryRouter from './categoryRouter.js';

//import errorService from '../services/errorHandler.js';

router.use(categoryRouter);
router.use(postRouter);

// router.use(errorService._404);
// router.use(errorService.manageError);

export default router;
