import { Router } from "express";
import retanguloController from "../controllers/RetanguloController";

const routers = Router();

routers.post("/", retanguloController.createOne);
routers.get("/", retanguloController.listAll);

export default routers;
