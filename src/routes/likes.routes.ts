import { Router } from 'express';
import { likePost, unlikePost, countLikes } from '../controllers/likes.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/:postId', authenticate, likePost);
router.delete('/:postId', authenticate, unlikePost);
router.get('/:postId/count', countLikes);

export default router;