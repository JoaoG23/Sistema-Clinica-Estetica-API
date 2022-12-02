import { Router } from "express";
const routers = Router();
import OcupacoesController from "../../controllers/OcupacoesController";

routers.get("/", OcupacoesController.listAll);
routers.get("/:id", OcupacoesController.listOneById);

routers.delete("/:id", OcupacoesController.deleteById);
routers.delete("/", OcupacoesController.deleteById);

routers.put("/:id", OcupacoesController.updateById);
routers.put("/", OcupacoesController.updateById);

routers.post("/", OcupacoesController.create);

export default routers;
