import { Optional } from "sequelize";

export interface HistoricoAttributes {
    id?: number;
    entrada_horario?:Date;
    saida_horario?:Date;
    id_cliente?:number;
    cliente_nome?:string;

    id_funcionario?:number;
    funcionario_nome?:string;

    id_tipo_servico?:number;
    tipo_servico_nome?:string;
    
    is_marcado?:boolean;
    status_pagamento?:string;
    valor_pago?:number;
    observacoes?:string;
  }

export interface HistoricoInput extends Optional<HistoricoAttributes, 'id' > {}
export interface HistoricoOuput extends Required<HistoricoAttributes> {}