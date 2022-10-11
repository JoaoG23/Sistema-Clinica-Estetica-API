import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { AgendamentosAttributes, AgendamentosInput } from "./Interface";

class Agendamentos
  extends Model<AgendamentosAttributes, AgendamentosInput>
  implements AgendamentosAttributes
{
  public id: number;
  public entrada_horario?: Date;
  public saida_horario?: Date;
  public id_cliente?: number;
  public id_funcionario?: number;
  public is_marcado?: boolean;
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
    entrada_horario: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    saida_horario: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    id_cliente: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: "clientes",
        key: "id",
      },
    },
    id_funcionario: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: "funcionarios",
        key: "id",
      },
    },
    id_tipo_servico: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: "tiposservicos",
        key: "id",
      },
    },
    is_marcado: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    status_pagamento: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'pago',
    },
    valor_pago: {
      allowNull: false,
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
