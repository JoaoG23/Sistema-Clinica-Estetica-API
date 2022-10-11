import { Router } from "express";
const routers = Router();

import funcionariosRouters from "../funcionariosRouters";
import tipoServicoRouters from "../tipoServicoRouters";

routers.use("/funcionarios", funcionariosRouters);
routers.use("/tiposervicos", tipoServicoRouters);

export default routers;