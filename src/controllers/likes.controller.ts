import { Request, Response, NextFunction } from 'express';
import { Like } from '../models/like.model';
import { Post } from '../models/post.model';

export const likePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user?.id;
    const postId = Number(req.params.postId);
    const existing = await Like.findOne({ where: { userId, postId } });
    if (existing) return res.status(400).json({ message: 'Already liked' });
    const like = await Like.create({ userId, postId });
    res.status(201).json(like);
  } catch (err) { next(err); }
};

export const unlikePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user?.id;
    const postId = Number(req.params.postId);
    const existing = await Like.findOne({ where: { userId, postId } });
    if (!existing) return res.status(404).json({ message: 'Like not found' });
    await existing.destroy();
    res.json({ message: 'Unliked' });
  } catch (err) { next(err); }
};

export const countLikes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postId = Number(req.params.postId);
    const cnt = await Like.count({ where: { postId } });
    res.json({ postId, likes: cnt });
  } catch (err) { next(err); }
};
