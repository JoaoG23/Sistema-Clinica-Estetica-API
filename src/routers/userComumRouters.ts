import { Router } from "express";
import UsersController from "../controllers/UsersController";
const routers = Router();

routers.get("/:id", UsersController.listOneForId);
routers.get("/username/:userName", UsersController.listOneForUserUsername);

export default routers;
