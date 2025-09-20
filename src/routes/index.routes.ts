import { Router } from 'express';
import authRoutes from './auth.routes';
import usersRoutes from './users.routes';
import postsRoutes from './posts.routes';
import commentsRoutes from './comments.routes';
import likesRoutes from './likes.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentsRoutes);
router.use('/likes', likesRoutes);

export default router;
