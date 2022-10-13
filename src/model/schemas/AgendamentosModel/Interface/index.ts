import { Optional } from "sequelize";

export interface AgendamentosAttributes {
    id?: number;
    data?:Date;
    horario?:string;
    id_cliente?:number;
    id_funcionario?:number;
    id_tipo_servico?:number;
    status_pagamento?:string;
    valor_pago?:number;
    observacoes?:string;
  }

export interface AgendamentosInput extends Optional<AgendamentosAttributes, 'id' > {}
export interface AgendamentosOuput extends Required<AgendamentosAttributes> {}