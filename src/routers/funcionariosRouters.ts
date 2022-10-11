import { Router } from "express";
const routers = Router();
import FuncionariosController from "../controllers/FuncionariosController";

routers.get("/", FuncionariosController.listAll);
routers.get("/:id", FuncionariosController.listOneById);

routers.delete("/:id", FuncionariosController.deleteById);
routers.delete("/", FuncionariosController.deleteById);

routers.put("/:id", FuncionariosController.updateById);
routers.put("/", FuncionariosController.updateById);

routers.post("/", FuncionariosController.create);

export default routers;
