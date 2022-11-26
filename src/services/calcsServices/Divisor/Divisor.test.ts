import { it, describe, expect } from "vitest";
import Divisor from "./Divisor";

describe("Teste todos os Metodos Classe Divisor", () => {
  describe("Quando sistema enviar valores como 24 e 4 argumentos do metódo divideTwoNumbers", () => {
    it("Deveria ser capaz calcular e demostrar o resultado esperado de numero 6", () => {

      const primeiroValor = 24;
      const segundoValor = 4;

      const resultado = Divisor.divideTwoNumbers(primeiroValor, segundoValor);
      expect(resultado).toEqual(6);
      expect(resultado).not.toBeNull();
    });
  });
});
