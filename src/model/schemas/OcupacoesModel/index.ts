import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { OcupacoesAttributes, OcupacoesInput } from "./Interface";

class Ocupacoes
  extends Model<OcupacoesAttributes, OcupacoesInput>
  implements OcupacoesAttributes
{
  public id: number;
  public descricao?: string;
}

Ocupacoes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false,
      validate:{
        notEmpty:true
      }
    },
  },
  {
    freezeTableName: true,
    tableName: "ocupacoes",
    sequelize: db,
    timestamps: false,
  }
);

export default Ocupacoes;
