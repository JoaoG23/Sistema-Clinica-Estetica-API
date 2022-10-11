import { Router } from "express";
const routers = Router();

import fullAdminRouters from "./fullAdminRouters";
import operadorRouters from "./operadorRouters";
import comumRouters from "./comumRouters";
import sessionRouters from "../sessionRouters";

import auth from "../Auth";

// Lembre-se a ordem dos fatores altera o produto
routers.use('/admin',auth.user ,auth.admin, fullAdminRouters);
routers.use('/operador', auth.user,auth.operador, operadorRouters);
routers.use('/auth',  sessionRouters);
routers.use("/", auth.user, comumRouters);


export default routers;
