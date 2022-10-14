import { Router } from "express";
const routers = Router();

import userComumRouters from '../userComumRouters';
import clientesRouters from "../clientesRouters";

routers.use("/user", userComumRouters);
routers.use("/clientes", clientesRouters);

export default routers;