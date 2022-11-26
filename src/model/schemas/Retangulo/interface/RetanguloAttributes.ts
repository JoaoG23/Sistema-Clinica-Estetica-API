import { Optional } from "sequelize";

export interface RetanguloAttributes {
  id?: number;
  descricao?: string;
  altura?: number;
  largura?: number;
  perimetro?: number;
  area?: number;
}

export interface RetanguloInput
  extends Optional<RetanguloAttributes, "id" | "area" | "perimetro"> {}
export interface RetanguloOuput extends Required<RetanguloAttributes> {}
