import { Router } from "express";
const routers = Router();

import usersRouters from "../routersControllers/userRouters";
import agendamentosRouters from "../routersControllers/agendamentos/agendamentosRouters";
import clientesRouters from "../routersControllers/clientes/clientesRouters";
import funcionariosRouters from "../routersControllers/funcionarios/funcionariosRouters";
import tipoServicoRouters from "../routersControllers/tipoServicoRouters";
import previlegiesUsersRouters from "../routersControllers/previlegieUserRouters";
import ocupacoesRouters from "../routersControllers/ocupacoesRouters";

routers.use("/previlegiesusers", previlegiesUsersRouters);
routers.use("/users", usersRouters);
routers.use("/ocupacoes", ocupacoesRouters);
routers.use("/clientes", clientesRouters);
routers.use("/agendamentos", agendamentosRouters);
routers.use("/funcionarios", funcionariosRouters);
routers.use("/tiposervicos", tipoServicoRouters);

export default routers;
