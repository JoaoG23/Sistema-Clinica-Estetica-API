import { Optional } from "sequelize";

export interface TipoServicosAttributes {
    id?: number;
    nome_servico?:string;
  }

export interface TipoServicosInput extends Optional<TipoServicosAttributes, 'id' > {}
export interface TipoServicosOuput extends Required<TipoServicosAttributes> {}