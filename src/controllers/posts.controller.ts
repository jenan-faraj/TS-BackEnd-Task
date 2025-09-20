import { Request, Response, NextFunction } from 'express';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { content } = req.body;
    const userId = (req as any).user?.id;
    const post = await Post.create({ content, userId });
    res.status(201).json(post);
  } catch (err) { next(err); }
};

export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await Post.findAll({ include: [{ model: User, as: 'author', attributes: ['id', 'name'] }] });
    res.json(posts);
  } catch (err) { next(err); }
};

export const getPostsByUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = Number(req.params.userId);
    const posts = await Post.findAll({ where: { userId } });
    res.json(posts);
  } catch (err) { next(err); }
};

export const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    const userId = (req as any).user?.id;
    if (post.userId !== userId && (req as any).user?.role !== 'admin')
      return res.status(403).json({ message: 'Forbidden' });
    post.content = req.body.content ?? post.content;
    await post.save();
    res.json(post);
  } catch (err) { next(err); }
};

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    const userId = (req as any).user?.id;
    if (post.userId !== userId && (req as any).user?.role !== 'admin')
      return res.status(403).json({ message: 'Forbidden' });
    await post.destroy();
    res.json({ message: 'Post deleted' });
  } catch (err) { next(err); }
};