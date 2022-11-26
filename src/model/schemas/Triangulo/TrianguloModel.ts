import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import {
  TrianguloAttributes,
  TrianguloInput,
} from "./interface/TrianguloAttributes";

class Triangulo
  extends Model<TrianguloAttributes, TrianguloInput>
  implements TrianguloAttributes
{
  public id?: number;
  public descricao?: string;
  public altura_lados?: number;
  public perimetro?: number;
  public area?: number;
}

Triangulo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura_lados: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    perimetro: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
    },
    area: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
    },
  },

  {
    timestamps: false,
    freezeTableName: true,
    sequelize: db,
    tableName: "triangulos",
  }
);

export default Triangulo;
