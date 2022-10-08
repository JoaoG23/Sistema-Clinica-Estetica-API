import { Router } from "express";
const routers = Router();

import usersRouters from './userRouters';
import loginRouters from './sessionRouters';

import auth from '../routers/Auth';

routers.use('/users' , usersRouters);
routers.use('/auth', loginRouters);

export default routers;