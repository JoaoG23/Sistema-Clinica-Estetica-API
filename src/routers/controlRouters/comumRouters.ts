import { Router } from "express";
const routers = Router();

import usersRouters from "../userRouters";
import clientesRouters from "../clientesRouters";


routers.use("/users", usersRouters);
routers.use("/clientes", clientesRouters);

export default routers;