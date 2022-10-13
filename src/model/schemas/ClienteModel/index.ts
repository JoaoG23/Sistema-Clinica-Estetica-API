import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { ClienteAttributes, ClienteInput } from "./Interface";

class Cliente
  extends Model<ClienteAttributes, ClienteInput>
  implements ClienteAttributes
{
  public id: number;
  public nome_cliente?: string;
  public telefone?: string;
  public endereco?: string;
  public observacoes?: string;
  public id_usuario?: number;
}

Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome_cliente: {
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
      allowNull: false,
    },
    observacoes: {
      type: DataTypes.STRING(100),
    },
    id_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    tableName: "clientes",
    sequelize: db,
    timestamps: false,
  }
);

export default Cliente;
