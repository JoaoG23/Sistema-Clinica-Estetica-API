import { Optional } from "sequelize";

export interface TrianguloAttributes {
  id?: number;
  descricao?: string;
  altura_lados?: number;
  perimetro?: number;
  area?: number;
}

export interface TrianguloInput
  extends Optional<TrianguloAttributes, "id" | "area"> {}
export interface TrianguloOuput extends Required<TrianguloAttributes> {}
