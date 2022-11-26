import { it, describe, expect } from "vitest";
import Multiplier from "./Multiplier";

describe("Teste método multiplyTwoNumbers da classe Multiplier", () => {
  describe("Quando sistema enviar o numero 3 e 4 como argumentos do metódo multiplyTwoNumbers a diante", () => {
    it("Deveria ser capaz demostrar o número esperado 12 a seguir", () => {
      const tres = 3;
      const quatro = 4;

      const resultado = Multiplier.multiplyTwoNumbers(tres, quatro);
      expect(resultado).toEqual(12);
      expect(resultado).not.toBeNull();
    });
  });
});
