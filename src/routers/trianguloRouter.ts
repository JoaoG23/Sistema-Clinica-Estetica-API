import { Router } from "express";
import trianguloController from "../controllers/TrianguloController";

const routers = Router();

routers.post("/", trianguloController.createOne);
routers.get("/", trianguloController.listAll);

export default routers;
