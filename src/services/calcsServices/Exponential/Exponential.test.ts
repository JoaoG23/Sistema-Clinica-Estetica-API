import { it, describe, expect } from "vitest";
import Exponential from "./Exponential";

describe("Teste todos os Metodos Classe Exponential", () => {
  describe("Quando sistema enviar valores 2 como base e 2 expoente argumentos do metódo raisedToPower", () => {
    it("Deveria ser capaz calcular e demostrar o resultado esperado de numero 4", () => {

      const base = 2;
      const expoente = 2;

      const resultado = Exponential.raisedToPower(base, expoente);
      expect(resultado).toEqual(4);
      expect(resultado).not.toBeNull();
    });
  });
});
