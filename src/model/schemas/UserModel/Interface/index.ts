import { DataType,Model, Optional } from "sequelize";

export interface UserAttributes {
    id?: number;
    userName?: string;
    password?: string;
    email?:string;
    idPrevilegies?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }

export interface UserInput extends Optional<UserAttributes, 'id' | 'userName'> {}
export interface UserOuput extends Required<UserAttributes> {}