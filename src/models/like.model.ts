import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Like extends Model {
  public id!: number;
  public userId!: number;
  public postId!: number;
}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
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
  { tableName: 'likes', sequelize, timestamps: true }
);