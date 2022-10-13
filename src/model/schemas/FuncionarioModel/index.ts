import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { FuncionarioAttributes, FuncionarioInput } from "./Interface";

class Funcionario
  extends Model<FuncionarioAttributes, FuncionarioInput>
  implements FuncionarioAttributes
{
  public id: number;
  public nome_funcionario?: string;
  public endereco?: string;
  public telefone?: string;
  public id_ocupacao?: number;
  public id_usuario?: number;
}

Funcionario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome_funcionario: {
      type: DataTypes.STRING(70),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    endereco: {
      type: DataTypes.STRING(70),
    },
    telefone: {
      type: DataTypes.STRING(20),
    },
    id_ocupacao: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: "ocupacoes",
        key: "id",
      },
    },
    id_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    tableName: "funcionarios",
    sequelize: db,
    timestamps: false,
  }
);

export default Funcionario;
