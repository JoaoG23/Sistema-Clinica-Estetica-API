import { Router } from "express";
const routers = Router();

import userComumRouters from "../routersControllers/userComumRouters";
import clientesRouters from "../routersControllers/clientes/clientesRouters";
import clienteAgendamentosRouters from "../routersControllers/agendamentos/clienteAgendamentosRouters";

routers.use("/user", userComumRouters);
routers.use("/clientes", clientesRouters);
routers.use("/clientes/horarios", clienteAgendamentosRouters);

export default routers;
