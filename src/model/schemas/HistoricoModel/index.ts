import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { HistoricoAttributes, HistoricoInput } from "./Interface";

class Historico
  extends Model<HistoricoAttributes, HistoricoInput>
  implements HistoricoAttributes
{
  public id: number;
  public entrada_horario?: Date;
  public saida_horario?: Date;

  public id_cliente?: number;
  public cliente_nome?: string;

  public id_funcionario?: number;
  public funcionario_nome?: string;

  public is_marcado?: boolean;
  public id_tipo_servico?: number;
  public tipo_servico_nome?: string;

  public status_pagamento?: string;
  public valor_pago?: number;
  public observacoes?: string;
}

Historico.init(
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
      defaultValue: 1
    },
    cliente_nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_funcionario: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    funcionario_nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    id_tipo_servico: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    tipo_servico_nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
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
      defaultValue: "pago",
    },
    valor_pago: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    observacoes: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  {
    freezeTableName: true,
    tableName: "historico_agendamentos",
    sequelize: db,
    timestamps: false,
  }
);

export default Historico;
