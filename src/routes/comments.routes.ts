import { Router } from 'express';
import { addComment, getCommentsForPost, updateComment, deleteComment } from '../controllers/comments.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/:postId', authenticate, addComment);
router.get('/:postId', getCommentsForPost);
router.put('/edit/:id', authenticate, updateComment);
router.delete('/delete/:id', authenticate, deleteComment);

export default router;