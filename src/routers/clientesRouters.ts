import { Router } from "express";
import AgendamentosController from "../controllers/AgendamentosController";
import ClientesController from '../controllers/ClientesController'
const routers = Router();

routers.get("/", ClientesController.listAll);
routers.get("/:id", ClientesController.listOneById);
routers.get("/agendamentos/:id", AgendamentosController.listAllByIdCliente);

routers.delete("/:id", ClientesController.deleteById);
routers.delete("/", ClientesController.deleteById);

routers.put("/:id", ClientesController.updateById);
routers.put("/", ClientesController.updateById);
routers.put("/marcar/:id", ClientesController.scheduleTheTime);
routers.put("/desmarcar/:id", ClientesController.clearTime);

routers.post("/", ClientesController.create);

export default routers;

