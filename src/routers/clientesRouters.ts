import { Router } from "express";
const routers = Router();
import ClientesController from '../controllers/ClientesController'

routers.get("/", ClientesController.listAll);
routers.get("/:id", ClientesController.listOneById);

routers.delete("/:id", ClientesController.deleteById);
routers.delete("/", ClientesController.deleteById);

routers.put("/:id", ClientesController.updateById);
routers.put("/", ClientesController.updateById);

routers.post("/", ClientesController.create);

export default routers;

