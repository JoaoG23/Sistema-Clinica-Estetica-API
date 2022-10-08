import { DataType,Model, Optional } from "sequelize";

export interface UserAttributes {
    id?: number;
    name?: string;
    userName?: string;
    password?: string;
    phonenumber?: string;
    idPrevilegies?: number;
    email?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

export interface UserInput extends Optional<UserAttributes, 'id' | 'userName'> {}
export interface UserOuput extends Required<UserAttributes> {}