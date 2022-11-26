import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import {
  RetanguloAttributes,
  RetanguloInput,
} from "./interface/RetanguloAttributes";

class Retangulo
  extends Model<RetanguloAttributes, RetanguloInput>
  implements RetanguloAttributes
{
  public id: number;
  public descricao?: string;
  public altura?: number;
  public largura?: number;
  public perimetro?: number;
  public area?: number;
}

Retangulo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    altura: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    largura: {
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
    tableName: "retangulos",
  }
);

export default Retangulo;
