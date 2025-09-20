import { User } from './user.model';
import { Post } from './post.model';
import { Comment } from './comment.model';
import { Like } from './like.model';

User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
Post.belongsTo(User, { foreignKey: 'userId', as: 'author' });

User.hasMany(Comment, { foreignKey: 'userId', as: 'comments' });
Comment.belongsTo(User, { foreignKey: 'userId', as: 'author' });

Post.hasMany(Comment, { foreignKey: 'postId', as: 'comments' });
Comment.belongsTo(Post, { foreignKey: 'postId', as: 'post' });

User.belongsToMany(Post, { through: Like, as: 'likedPosts', foreignKey: 'userId' });
Post.belongsToMany(User, { through: Like, as: 'likedBy', foreignKey: 'postId' });

export { User, Post, Comment, Like };