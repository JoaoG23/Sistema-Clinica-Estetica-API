import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { AgendamentosAttributes, AgendamentosInput } from "./Interface";

class Agendamentos
  extends Model<AgendamentosAttributes, AgendamentosInput>
  implements AgendamentosAttributes
{
  public id: number;
  public data?: Date;
  public horario?: string;
  public id_cliente?: number;
  public id_funcionario?: number;
  public id_tipo_servico?: number;
  public status_pagamento?: string;
  public valor_pago?: number;
  public observacoes?: string;
}

Agendamentos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    horario: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      references: {
        model: "clientes",
        key: "id",
      },
    },
    id_funcionario: {
      type: DataTypes.INTEGER,
      references: {
        model: "funcionarios",
        key: "id",
      },
    },
    id_tipo_servico: {
      type: DataTypes.INTEGER,
      references: {
        model: "tiposservicos",
        key: "id",
      },
    },
    valor_pago: {
      type: DataTypes.DECIMAL(10,2),
      defaultValue: 0,
    },
    observacoes: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  },
  {
    freezeTableName: true,
    tableName: "agendamentos",
    sequelize: db,
    timestamps: false,
  }
);

export default Agendamentos;
