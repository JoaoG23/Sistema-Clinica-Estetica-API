import { Router } from "express";
import estatisticasController from "../controllers/EstatisticasController";

const routers = Router();

routers.get("/soma-todos-area-poligonos", estatisticasController.listOneSumAllArea);

export default routers;
