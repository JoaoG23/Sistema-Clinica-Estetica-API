import { Router } from "express";
import ClientesController from "../../../controllers/ClientesController";
const routers = Router();

routers.get("/:id", ClientesController.listOneById);
routers.get("/", ClientesController.listAll);

routers.delete("/:id", ClientesController.deleteById);
routers.delete("/", ClientesController.deleteById);

routers.put("/:id", ClientesController.updateById);
routers.put("/", ClientesController.updateById);

routers.post("/", ClientesController.create);

export default routers;
