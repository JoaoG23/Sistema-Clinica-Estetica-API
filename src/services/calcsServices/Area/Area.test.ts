import { it, describe, expect } from "vitest";
import Area from "./Area";

describe("Teste todos os Metodos Classe Area", () => {
  describe("Quando sistema enviar valor 12cm, como argumento no metodo calculeAreaTriangulo ", () => {
    it("Deveria ser capaz calcular area do triangulo e retorna resultado esperado de numero 62,35", () => {
      const largura = 12;

      const resultado = Area.calculeAreaTriangulo(largura);
      expect(resultado).toEqual(62.35);
      expect(resultado).not.toBeNull();
    });
  });

  describe("Quando sistema enviar valor 10cm de largura e 2cm de altura, como argumento no metodo calculeAreaRetangulo ", () => {
    it("Deveria ser capaz calcular area do retangulo e retorna resultado esperado de numero 12m2", () => {
      const largura = 10;
      const altura = 2;

      const resultado = Area.calculeAreaRetangulo(altura, largura);
      expect(resultado).toEqual(20);
      expect(resultado).not.toBeNull();
    });
  });
});
