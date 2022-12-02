import { Optional } from "sequelize";

export interface FuncionarioAttributes {
    id?: number;
    nome_funcionario?:string;
    telefone?:string;
    endereco?:string;
    id_usuario?:number;
    id_ocupacao?:number;
  }

export interface FuncionarioInput extends Optional<FuncionarioAttributes, 'id' > {}
export interface FuncionarioOuput extends Required<FuncionarioAttributes> {}