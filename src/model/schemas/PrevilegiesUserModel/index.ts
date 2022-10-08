import { DataTypes } from "sequelize";
import { db } from "../../config";

const PrevilegiesUsersModel = db.define(
  "previlegies_users",
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
    timestamps: false,
  }
);

export default PrevilegiesUsersModel;
