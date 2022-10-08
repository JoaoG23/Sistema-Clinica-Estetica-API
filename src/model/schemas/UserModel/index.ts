import {  DataTypes , Model } from "sequelize";
import { db } from '../../database'
import { UserAttributes, UserInput } from "./User";

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number
  public name!: string
  public userName!: string
  public password!: string
  public phonenumber!: string
  public email!: string
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
    name: {
      type: DataTypes.STRING(70),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userName: {
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
    phonenumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true,
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
