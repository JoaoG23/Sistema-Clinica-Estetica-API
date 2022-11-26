import { it, describe, expect } from "vitest";
import SquareRoot from "./SquareRoot";

describe("Teste todos os Metodos Classe SquareRoot", () => {
  describe("Quando sistema enviar valore numero 64 como argumento no metodo calculeRoot ", () => {
    it("Deveria ser capaz calcular raiz quadrada e retorna resultado esperado de numero 8", () => {

      const valor = 64;

      const resultado = SquareRoot.calculeRoot(valor);
      expect(resultado).toEqual(8);
      expect(resultado).not.toBeNull();
    });
  });
});
