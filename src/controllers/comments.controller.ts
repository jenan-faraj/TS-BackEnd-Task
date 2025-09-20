import { Request, Response, NextFunction } from 'express';
import { Comment } from '../models/comment.model';

export const addComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { content } = req.body;
    const userId = (req as any).user?.id;
    const postId = Number(req.params.postId);
    const comment = await Comment.create({ content, userId, postId });
    res.status(201).json(comment);
  } catch (err) { next(err); }
};

export const getCommentsForPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postId = Number(req.params.postId);
    const comments = await Comment.findAll({ where: { postId } });
    res.json(comments);
  } catch (err) { next(err); }
};

export const updateComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const comment = await Comment.findByPk(id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    const userId = (req as any).user?.id;
    if (comment.userId !== userId && (req as any).user?.role !== 'admin')
      return res.status(403).json({ message: 'Forbidden' });
    comment.content = req.body.content ?? comment.content;
    await comment.save();
    res.json(comment);
  } catch (err) { next(err); }
};

export const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const comment = await Comment.findByPk(id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    const userId = (req as any).user?.id;
    if (comment.userId !== userId && (req as any).user?.role !== 'admin')
      return res.status(403).json({ message: 'Forbidden' });
    await comment.destroy();
    res.json({ message: 'Comment deleted' });
  } catch (err) { next(err); }
};