import { it, describe, expect, afterEach, beforeEach } from "vitest";
import UserModel from "../../model/schemas/UserModel";

import request from "supertest";
import app from "../../app";

// Services
import TruncateAll from "../../controllers/services/Truncate";
import GenerateToken from "../../controllers/services/GenerateToken";

// Seeds
import {
  angela,
  angelaLogin,
  angelaWithId,
  emailAngelaAndNewPassword,
  gabiroba,
  zelanbida,
} from "./seedsForTests/userExample";
// 1- Quem estou testando
// 2 - Quando eu fazer algo! When send any
// 3 - O que deveria fazer? should be
describe("Create Users", () => {
  describe("When send datas as username, name, password,phonenumber, email ", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });
    beforeEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Should to create one status 201", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });
      const res = await request(app)
        .post("/api/users/")
        .set("authorization-token", token)
        .send(angela);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("msg");
      expect(res.body.msg).toBe("User inserted with success");
    });
  });
});

describe("Delete Users", () => {
  describe("When send METHOD = DELETE in the routers api/users/", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Should to find one user and to remove User", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });
      const createUser = await request(app)
        .post("/api/users")
        .set("authorization-token", token)
        .send(angela);

      const showUserForDelete = await request(app)
        .get("/api/users/1")
        .set("authorization-token", token);
      const deleted = await request(app)
        .delete("/api/users/1")
        .set("authorization-token", token);

      expect(deleted.statusCode).toEqual(200);
      expect(deleted.body).toHaveProperty("msg");
      expect(deleted.body.msg).toBe("User deleted with success");
    });
  });
});

describe("List Users", () => {
  describe("When send GET in the routers api/users/", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Should to find all users registed and show all", async () => {
      // Create on new list of users
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });

      const first = await request(app)
        .post("/api/users")
        .set("authorization-token", token)
        .send(angela);

      const second = await request(app)
        .post("/api/users")
        .set("authorization-token", token)
        .send(gabiroba);

      const third = await request(app)
        .post("/api/users")
        .set("authorization-token", token)
        .send(zelanbida);

      const res = await request(app)
        .get("/api/users")
        .set("authorization-token", token);

      expect(res.statusCode).toEqual(200);
    });
  });

  describe("When send GET in the routers api/users/1", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Should to find one user registed and to show your datas", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });
      // Create on new list of users
      const first = await request(app)
        .post("/api/users")
        .set("authorization-token", token)
        .send(gabiroba);

      const res = await request(app)
        .get("/api/users/1")
        .set("authorization-token", token);

      expect(res.statusCode).toEqual(200);
    });
  });
});

describe("Update Users", () => {
  describe("When send METHOD = PUT in the routers api/users/", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Should to find one user and to update datas user angela to gabiroba, for params request", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });
      const createUser = await request(app)
        .post("/api/users")
        .set("authorization-token", token)
        .send(angela);

      const showUserForEdit = await request(app).get("/api/users/1");

      const updated = await request(app)
        .put("/api/users/1")
        .set("authorization-token", token)
        .send(gabiroba);

      expect(updated.statusCode).toEqual(200);
      expect(updated.body).toHaveProperty("msg");
      expect(updated.body.msg).toBe("User updated with success");
    });
  });

  describe("When send METHOD = PUT in the routers api/users/", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Should to find one user and to update datas user gabiroba to angela for body request", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });
      const createUser = await request(app)
        .post("/api/users")
        .set("authorization-token", token)
        .send(gabiroba);

      const showUserForEdit = await request(app).get("/api/users");

      const updated = await request(app)
        .put("/api/users")
        .set("authorization-token", token)
        .send(angelaWithId);

      expect(updated.statusCode).toEqual(200);
      expect(updated.body).toHaveProperty("msg");
      expect(updated.body.msg).toBe("User updated with success");
    });
  });

  describe("When send METHOD = PUT in the routers api/users/", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Should execpetion throw error for try to one user angela that not exists", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });
      const updated = await request(app)
        .put("/api/users/1")
        .set("authorization-token", token)
        .send(angela);

      expect(updated.statusCode).toEqual(400);
      expect(updated.body).toHaveProperty("msg");
      expect(updated.body.msg).toBe("User not exists for updated");
    });
  });
});

describe("Login User", () => {
  describe("When the user created to do login ", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Should get status 200 and show all data of user angela join userToken", async () => {
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
  describe("When user not created to do login ", () => {
    beforeEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Should get status 400 don't to do login user not exists", async () => {
      const token = await GenerateToken.execulte({ id: 1, previlegie: 2 });
      const loginAngela = await request(app)
        .post("/api/auth/login")
        .set("authorization-token", token)
        .send(angelaLogin);

      expect(loginAngela.statusCode).toEqual(404);
      expect(loginAngela.headers);
      console.log(loginAngela.body);
      expect(loginAngela.body).toHaveProperty("msg");
      // expect(loginAngela.body.msg).toBe("Password or user incorrect");
    });
  });
  describe("When the user change your password  ", () => {
    afterEach(() => {
      TruncateAll.execulte(UserModel);
    });

    it("Should user to able in the change your password", async () => {
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
      // expect(changedPassword.body.msg).toBe("Password or user incorrect");
    });
  });
});

