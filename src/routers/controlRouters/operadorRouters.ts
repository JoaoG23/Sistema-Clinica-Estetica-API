import { Router } from "express";
const routers = Router();

import funcionariosRouters from "../routersControllers/funcionarios/funcionariosRouters";
import tipoServicoRouters from "../routersControllers/tipoServicoRouters";
import agendamentosRouters from "../routersControllers/agendamentos/agendamentosRouters";
import funcionariosAgendamentosRouters from "../routersControllers/agendamentos/funcionariosAgendamentosRouters";

routers.use("/funcionarios", funcionariosRouters);
routers.use("/tiposervicos", tipoServicoRouters);
routers.use("/agendamentos", agendamentosRouters);
routers.use("/horarios", funcionariosAgendamentosRouters);


export default routers;
