import { Router } from "express";
const routers = Router();

import usersRouters from "../userRouters";
import agendamentosRouters from "../agendamentosRouters";
import clientesRouters from "../clientesRouters";
import funcionariosRouters from "../funcionariosRouters";
import tipoServicoRouters from "../tipoServicoRouters";
import previlegiesUsersRouters from '../previlegieUserRouters';
import ocupacoesRouters from '../ocupacoesRouters';


routers.use("/previlegiesusers",previlegiesUsersRouters);
routers.use("/users", usersRouters);
routers.use("/ocupacoes", ocupacoesRouters);
routers.use("/clientes", clientesRouters);
routers.use("/agendamentos", agendamentosRouters);
routers.use("/funcionarios", funcionariosRouters);
routers.use("/tiposervicos",  tipoServicoRouters);

export default routers;
