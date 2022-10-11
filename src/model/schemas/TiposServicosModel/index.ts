import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { TipoServicosAttributes, TipoServicosInput } from "./Interface";

class TipoServicos
  extends Model<TipoServicosAttributes, TipoServicosInput>
  implements TipoServicosAttributes
{
  public id: number;
  public nome_servico: string;
}

TipoServicos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome_servico: {
      type: DataTypes.STRING(45),
      allowNull: false,
      validate:{
        notEmpty:true
      }
    },
  },
  {
    freezeTableName: true,
    tableName: "tiposservicos",
    sequelize: db,
    timestamps: false,
  }
);

export default TipoServicos;
