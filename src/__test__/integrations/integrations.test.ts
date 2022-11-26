import { test, describe, expect, afterEach, beforeEach } from "vitest";
import request from "supertest";
import app from "../../app";

import { retanguloData } from "./seedsForTests/retanguloCreated";
import CleanerData from "../../services/mainServices/CleanerData";
import Retangulo from "../../model/schemas/Retangulo/RetanguloModel";
import Triangulo from "../../model/schemas/Triangulo/TrianguloModel";
import { trianguloData } from "./seedsForTests/trianguloCreated";

// Retangulo
describe("Criar Retangulo", () => {
  describe("Quando usuario enviar os dados do poligono retangulo", () => {
    afterEach(() => {
      CleanerData.clearAll(Retangulo);
    });

    test("Deveria ser capaz de criar novo triangulo na base de dados, em seguir mostrar os dados da criação na resposta de requisição", async () => {
      
      const created = await request(app)
        .post("/api/retangulo/")
        .send(retanguloData);

      expect(created.statusCode).toEqual(201);
    });
  });

  describe("Quando usuario enviar os dados do poligono retangulo", () => {
    afterEach(() => {
      CleanerData.clearAll(Retangulo);
    });

    test("Deveria ser capaz de criar novo retangulo além disso listá-lo na api", async () => {
      const created = await request(app)
        .post("/api/retangulo/")
        .send(retanguloData);

      const showRetanguloCreated = await request(app).get("/api/retangulo/");

      expect(showRetanguloCreated.statusCode).toEqual(200);
      expect(showRetanguloCreated.statusCode).not.toBeNull();
      expect(showRetanguloCreated.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            descricao: "Retangulo criado para testes",
            altura: "2.00",
            largura: "6.00",
            perimetro: "16.00",
            area: "12.00",
          }),
        ])
      );
    });
  });
});

// Triangulo --
describe("Criar Triangulo", () => {
  describe("Quando usuario enviar os dados do poligono triangulo", () => {
    afterEach(() => {
      CleanerData.clearAll(Triangulo);
    });

    test("Deveria ser capaz de criar novo triangulo na base de dados, em seguir mostrar os dados da criação na resposta de requisição", async () => {
      const created = await request(app)
        .post("/api/triangulo/")
        .send(trianguloData);
        
        expect(created.statusCode).toEqual(201);
      });
    });
    
    describe("Quando usuario enviar os dados do poligono Triangulo", () => {
      afterEach(() => {
      CleanerData.clearAll(Triangulo);
    });
    
    test("Deveria ser capaz de criar novo Triangulo além disso listá-lo na api", async () => {
      const created = await request(app)
        .post("/api/triangulo/")
        .send(trianguloData);
        
        const showTrianguloCreated = await request(app).get("/api/triangulo/");

        expect(showTrianguloCreated.statusCode).toEqual(200);
        expect(showTrianguloCreated.statusCode).not.toBeNull();
        expect(showTrianguloCreated.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
              id: 1,
              descricao: 'Triangulo Equilátero criado para testes',
              altura_lados: '20.00',
              perimetro: '60.00',
              area: '173.20'
          }),
        ])
      );
    });
  });
});

describe("Soma de todas as areas dos Poligonos", () => {
  describe("Quando usuario criar 1 triangulo e 1 retangulo", () => {
    beforeEach(() => {
      CleanerData.clearAll(Triangulo);
    });
    beforeEach(() => {
      CleanerData.clearAll(Retangulo);
    });

    test("Deveria ser capaz retorna soma de todas as areas dos poligonos seja o valor 185.20 m2", async () => {

      const resultTotalAreaPoligono = 185.2;
      const trianguloCreated = await request(app)
      .post("/api/triangulo/")
      .send(trianguloData);

      const retanguloCreated = await request(app)
      .post("/api/retangulo/")
      .send(retanguloData);

      const sumAllAreas = await request(app)
        .get("/api/estatisticas/soma-todos-area-poligonos")


        expect(retanguloCreated.statusCode).toEqual(201);
        expect(trianguloCreated.statusCode).toEqual(201);
        expect(sumAllAreas.statusCode).toEqual(200);
        expect(sumAllAreas.body).toEqual(resultTotalAreaPoligono);
      });
    });
});
