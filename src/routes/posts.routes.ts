import { Router } from 'express';
import { createPost, getAllPosts, getPostsByUser, updatePost, deletePost } from '../controllers/posts.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authenticate, createPost);
router.get('/', getAllPosts);
router.get('/user/:userId', getPostsByUser);
router.put('/:id', authenticate, updatePost);
router.delete('/:id', authenticate, deletePost);

export default router;