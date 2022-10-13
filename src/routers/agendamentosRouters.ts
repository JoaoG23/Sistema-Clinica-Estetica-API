import { Router } from "express";
const routers = Router();
import AgendamentosController from '../controllers/AgendamentosController'

routers.get("/", AgendamentosController.listAll);
routers.get("/:id", AgendamentosController.listOneById);

routers.delete("/:id", AgendamentosController.deleteById);
routers.delete("/", AgendamentosController.deleteById);

routers.put("/:id", AgendamentosController.updateById);
routers.put("/", AgendamentosController.updateById);

routers.post("/", AgendamentosController.create);

export default routers;

