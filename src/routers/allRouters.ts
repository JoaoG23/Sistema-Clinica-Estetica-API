import { Router } from "express";
const routers = Router();
import retanguloRouter from "./retanguloRouter";
import trianguloRouter from "./trianguloRouter";
import estatisticasRouter from "./estatisticasRouter";

routers.use("/estatisticas", estatisticasRouter);
routers.use("/retangulo", retanguloRouter);
routers.use("/triangulo", trianguloRouter);

export default routers;
