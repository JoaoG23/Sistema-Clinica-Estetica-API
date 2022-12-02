import {  DataTypes , Model } from "sequelize";
import { db } from '../../database'
import { PrevilegiesAttributes, PrevilegiesInput } from "./Interface";

class PrevilegiesUsers extends Model<PrevilegiesAttributes, PrevilegiesInput> implements PrevilegiesAttributes {
  public id: number
  public description: string
  public force: number
}

PrevilegiesUsers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    force: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    freezeTableName: true,
    tableName: "previlegies_users",
    sequelize:db,
    timestamps: false,
  }
)

export default PrevilegiesUsers;
