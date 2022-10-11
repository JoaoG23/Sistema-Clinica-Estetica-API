import { Optional } from "sequelize";

export interface AgendamentosAttributes {
    id?: number;
    entrada_horario?:Date;
    saida_horario?:Date;
    id_cliente?:number;
    id_funcionario?:number;
    id_tipo_servico?:number;
    is_marcado?:boolean;
    status_pagamento?:string;
    valor_pago?:number;
    observacoes?:string;
  }

export interface AgendamentosInput extends Optional<AgendamentosAttributes, 'id' > {}
export interface AgendamentosOuput extends Required<AgendamentosAttributes> {}