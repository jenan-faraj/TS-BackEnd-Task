import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Comment extends Model {
  public id!: number;
  public content!: string;
  public userId!: number;
  public postId!: number;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  { tableName: 'comments', sequelize }
);