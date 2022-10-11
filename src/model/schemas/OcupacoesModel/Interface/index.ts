import { Optional } from "sequelize";

export interface OcupacoesAttributes {
    id?: number;
    descricao?:string;
  }

export interface OcupacoesInput extends Optional<OcupacoesAttributes, 'id' > {}
export interface OcupacoesOuput extends Required<OcupacoesAttributes> {}