import { Router } from "express";
const routers = Router();
import PrevilegiesUserController from '../controllers/PrevilegiesUsersController';

routers.get("/", PrevilegiesUserController.listAll);
routers.get("/:id", PrevilegiesUserController.listOneById);

routers.delete("/:id", PrevilegiesUserController.deleteById);
routers.delete("/", PrevilegiesUserController.deleteById);

routers.put("/:id", PrevilegiesUserController.updateById);
routers.put("/", PrevilegiesUserController.updateById);
routers.get("/user/:idUser", PrevilegiesUserController.listAllForIdUser);

routers.post("/", PrevilegiesUserController.create);

export default routers;
