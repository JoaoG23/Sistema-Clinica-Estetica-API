import { it, describe, expect, afterEach, beforeEach } from "vitest";
import UserModel from "../../model/schemas/UserModel";

import request from "supertest";
import app from "../../app";

// Services
import TruncateAll from "../../controllers/services/Truncate";
import GenerateToken from "../../controllers/services/GenerateToken";

// Seeds
import { angela, angelaLogin, emailAngelaAndNewPassword, gabiroba } from "./seedsForTests/userExample";
// 1- Quem estou testando
// 2 - Quando eu fazer algo! When send any
// 3 - O que deveria fazer? should be
describe("Create Users", () => {
  describe("Quando eu enviar os dados do usuario angela ", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });
    beforeEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Deveria ser capaz de criar um usuario na base de dados e rota retorna um status code 201", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 1 });
      const res = await request(app)
        .post("/api/auth/register/")
        .set("authorization-token", token)
        .send(angela);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("msg");
      console.log(res.body);
    });
  });
});

describe("Lista um usuario", () => {
  describe("Quando eu enviar os dados do usuario angela ", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });
    it("Deveria ser capaz criar um usuario, em seguida ver os dados rece-usuário criado e retorna status 200 ", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 1 });

      const criar = await request(app)
        .post("/api/auth/register/")
        .set("authorization-token", token)
        .send(angela);

      const visualizar = await request(app)
        .get("/api/admin/users/")
        .set("authorization-token", token);

      expect(visualizar.statusCode).toEqual(200);

      expect(visualizar.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: 1,
            email: "angela@angela.com",
            userName: "angela",
            idPrevilegies: 1,
          }),
        ])
      );
    });
  });

  describe("Quando eu enviar os dados do usuario angela", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });
    it("Deveria ser capaz criar um usuario, em seguida ver os dados rece-usuário criado e retorna status 200 ", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 1 });

      const criar = await request(app)
        .post("/api/auth/register/")
        .set("authorization-token", token)
        .send(angela);

      const visualizar = await request(app)
        .get("/api/admin/users/")
        .set("authorization-token", token);

      expect(visualizar.statusCode).toEqual(200);

      expect(visualizar.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: 1,
            email: "angela@angela.com",
            userName: "angela",
            idPrevilegies: 1,
          }),
        ])
      );
    });
  });
});

describe('Delete um Usuário', () => {
  describe("Quando eu enviar os dados do usuario angela api/admin/users/", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Deveria ser capaz de encontrar usuário e deletá-lo", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 1 });
      const createUser = await request(app)
        .post("/api/admin/users")
        .set("authorization-token", token)
        .send(angela);

      const showUserForDelete = await request(app)
        .get("/api/admin/users/1")
        .set("authorization-token", token);

        
      const deleted = await request(app)
        .delete("/api/admin/users/1")
        .set("authorization-token", token);


        expect(deleted.statusCode).toEqual(200);
        expect(deleted.body).toHaveProperty("msg");

        const visualizar = await request(app)
        .get("/api/admin/users/")
        .set("authorization-token", token);

      expect(visualizar.statusCode).toEqual(200);
      expect(visualizar.body).toEqual(null);

      expect(visualizar.body).not.toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: 1,
            email: "angela@angela.com",
            userName: "angela",
            idPrevilegies: 1,
          }),
        ])
      );

    });
  });
});

describe("Atualizar dados do usuário", () => {
  describe("Quando for enviado METHOD = PUT nas rotas do usuario api/admin/users/", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Deveria ser capaz trocar os dados usuario angela para gabiroba pelos params da request", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 1 });
      const createUser = await request(app)
      .post("/api/admin/users")
      .set("authorization-token", token)
        .send(angela);

      const showUserForEdit = await request(app).get("/api/admin/users/");
      console.log(showUserForEdit.body);

      const updated = await request(app)
        .put("/api/admin/users/1")
        .set("authorization-token", token)
        .send(gabiroba);

        console.log(updated.body)

      expect(updated.statusCode).toEqual(200);
      expect(updated.body).toHaveProperty("msg");
    });
  });

  describe("Quando for enviado METHOD = PUT nas rotas api/admin/users/", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Deveria ser capaz enviar uma execeção resposta que usuário não existe retorna Status = 400", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 1 });
      const updated = await request(app)
        .put("/api/admin/users/1")
        .set("authorization-token", token)
        .send(angela);

        console.log(updated.body)
      expect(updated.statusCode).toEqual(400);
      expect(updated.body).toHaveProperty("msg");
    });
  });
});

describe("Login de Usuário", () => {
  describe("Quando fizer login", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Deveria ser capaz de demostrar o statusCode 200 e mostrar os dados requirido do usuario", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });
      const registerAngela = await request(app)
        .post("/api/auth/register")
        .set("authorization-token", token)
        .send(angela);

      const loginAngela = await request(app)
        .post("/api/auth/login")
        .set("authorization-token", token)
        .send(angelaLogin);

      expect(loginAngela.statusCode).toEqual(200);
      expect(loginAngela.headers);
      expect(loginAngela.body).toHaveProperty("msg");
      expect(loginAngela.body.tokenUser).not.toBeNull();
      expect(loginAngela.body.msg).toBe("User logged in success");
    });
  });
  describe("Quando usuário não for criado ainda", () => {
    beforeEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Deveria ser capaz da emitir statusCode 400 e emitir a mensagem the user not exists", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });
      const loginAngela = await request(app)
        .post("/api/auth/login")
        .set("authorization-token", token)
        .send(angelaLogin);

      expect(loginAngela.statusCode).toEqual(404);
      expect(loginAngela.headers);
      console.log(loginAngela.body);
      expect(loginAngela.body).toHaveProperty("msg");
    });
  });
  describe("Quando o usuario esquecer sua senha", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Deveria ser capaz de trocar sua senha enviando o email e sua nova senha", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });

      const registerAngela = await request(app)
        .post("/api/auth/register")
        .set("authorization-token", token)
        .send(angela);

      const changedPassword = await request(app)
        .put("/api/auth/forgetpassword")
        .set("authorization-token", token)
        .send(emailAngelaAndNewPassword);

      expect(changedPassword.statusCode).toEqual(200);
      expect(changedPassword.headers);
      expect(changedPassword.body).toHaveProperty("msg");
    });
  });
});





describe('Funcionarios e Seus testes', () => {
  describe('Quando ja tiver usuario criado e em seguida enviar dados para criação de um funcionário', () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Deveria ser capaz de atrelar/Criar um funcionario atravez daquele usuário recém criado", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });

      const registerAngela = await request(app)
        .post("/api/auth/register")
        .set("authorization-token", token)
        .send(angela);

      expect(changedPassword.statusCode).toEqual(200);
      expect(changedPassword.headers);
      expect(changedPassword.body).toHaveProperty("msg");
    });
  });

});