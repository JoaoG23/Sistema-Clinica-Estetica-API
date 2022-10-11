import { Optional } from "sequelize";

export interface ClienteAttributes {
    id?: number;
    id_usuario?:number;
    nome_cliente?:string;
    telefone?:string;
    endereco?:string;
    observacoes?:string;
  }

export interface ClienteInput extends Optional<ClienteAttributes, 'id' > {}
export interface ClienteOuput extends Required<ClienteAttributes> {}