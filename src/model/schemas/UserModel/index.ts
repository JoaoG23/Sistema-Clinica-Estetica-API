import {  DataTypes , Model } from "sequelize";
import { db } from '../../database'
import { UserAttributes, UserInput } from "./Interface";

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number
  public userName!: string
  public password!: string
  public email?: string;
  public idPrevilegies!: number

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    idPrevilegies: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: "previlegies_users",
        key: "id",
      },
    },
  },

  {
    timestamps: true,
    freezeTableName: true,
    sequelize:db,
    tableName: "users",
  }
)

export default User;
