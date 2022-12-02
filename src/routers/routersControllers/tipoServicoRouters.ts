import { Router } from "express";
const routers = Router();
import TipoServicoController from "../../controllers/TipoServicoController";

routers.get("/", TipoServicoController.listAll);
routers.get("/:id", TipoServicoController.listOneById);

routers.delete("/:id", TipoServicoController.deleteById);
routers.delete("/", TipoServicoController.deleteById);

routers.put("/:id", TipoServicoController.updateById);
routers.put("/", TipoServicoController.updateById);

routers.post("/", TipoServicoController.create);

export default routers;
