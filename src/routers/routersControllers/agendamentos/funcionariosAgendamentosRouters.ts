import { Router } from "express";
import AgendamentosController from "../../../controllers/AgendamentosController";
const routers = Router();

routers.get(
  "/buscaragendamentoshoje",
  AgendamentosController.listAllByIdFuncionarioAndDate
);
routers.get(
  "/marcados",
  AgendamentosController.listAllByIdFuncionarioDataMarcados
);
routers.get(
  "/desmarcados",
  AgendamentosController.listAllByIdFuncionarioDataDesmarcados
);
routers.get("/funcionario/:id", AgendamentosController.listAllByIdFuncionario);

export default routers;
