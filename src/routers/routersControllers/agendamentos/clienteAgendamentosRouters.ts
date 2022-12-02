import { Router } from "express";
import AgendamentosController from "../../../controllers/AgendamentosController";
const routers = Router();

routers.get(
  "/buscaragendamentos",
  AgendamentosController.listAllByIdClienteAndDate
);
routers.get("/:id", AgendamentosController.listAllByIdCliente);
routers.put("/marcar/:id", AgendamentosController.scheduleTheTime);
routers.put("/desmarcar/:id", AgendamentosController.clearTime);


export default routers;
