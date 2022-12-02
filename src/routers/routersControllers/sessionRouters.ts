import { Router } from "express";
import UsersController from "../../controllers/UsersController";
const routers = Router();

routers.post("/register", UsersController.create);
routers.post("/login", UsersController.login);
routers.put("/forgetpassword", UsersController.forgetPassword);

export default routers;
