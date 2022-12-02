import { Optional } from "sequelize";

export interface PrevilegiesAttributes {
    id?: number;
    description?: string;
    force?: number;
  }

export interface PrevilegiesInput extends Optional<PrevilegiesAttributes, 'id' | 'description'> {}
export interface PrevilegiesOuput extends Required<PrevilegiesAttributes> {}