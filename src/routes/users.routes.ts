import { Router } from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/users.controller';
import { authenticate, authorizeAdmin } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', authenticate, authorizeAdmin, getAllUsers);
router.get('/:id', authenticate, getUserById);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, authorizeAdmin, deleteUser);

export default router;