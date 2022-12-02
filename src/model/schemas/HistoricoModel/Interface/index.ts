import { Optional } from "sequelize";

export interface HistoricoAttributes {
    id?: number;
    data?:Date;
    horario?:string;
    
    id_cliente?:number;
    cliente_nome?:string;

    id_funcionario?:number;
    funcionario_nome?:string;

    id_tipo_servico?:number;
    tipo_servico_nome?:string;
    
    status_pagamento?:string;
    valor_pago?:number;
    observacoes?:string;
  }

export interface HistoricoInput extends Optional<HistoricoAttributes, 'id' > {}
export interface HistoricoOuput extends Required<HistoricoAttributes> {}