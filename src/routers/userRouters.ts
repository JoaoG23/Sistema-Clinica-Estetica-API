import { Router } from "express";
import UsersController from "../controllers/UsersController";
const routers = Router();

routers.get("/", UsersController.listAll);
routers.get("/:id", UsersController.listOneForId);
routers.get("/username/:userName", UsersController.listOneForUserUsername);

routers.delete("/:id", UsersController.deleteUserForId);
routers.delete("/", UsersController.deleteUserForId);

routers.put("/:id", UsersController.updateUserForId);
routers.put("/", UsersController.updateUserForId);


routers.post("/", UsersController.create);

export default routers;
