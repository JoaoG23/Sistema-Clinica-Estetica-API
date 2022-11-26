import { it, describe, expect } from "vitest";
import Perimeter from "../Perimeter/Perimeter";

describe("Teste todos os Metodos Classe Perimeter", () => {
  describe("Quando sistema enviar altura de valor 3 e largura de valor 4 como argumentos do metódo retanguloCalculate", () => {
    it("Deveria ser capaz calcular e demostrar o resultado esperado 14 como a seguir", () => {

      const primeiroValor = 3;
      const segundoValor = 4;

      const resultado = Perimeter.retanguloCalculate(primeiroValor, segundoValor);
      expect(resultado).toEqual(14);
      expect(resultado).not.toBeNull();
    });
  });

  describe("Quando sistema enviar um valor 12cm comprimento de um dos lados de triangulo como argumentos do metódo trianguloCalculate", () => {
    it("Deveria ser capaz calcular e demostrar o resultado esperado 36 como a seguir", () => {

      const comprimentoUmLado = 12;
      
      const resultado = Perimeter.trianguloCalculate(comprimentoUmLado);
      expect(resultado).toEqual(36);
      expect(resultado).not.toBeNull();
    });
  });
});
