import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import allRouters from './routers/allRouters';

class App {
    
    public express:express.Application;
    
    public constructor(){
        this.express = express();
        this.middleware();
        this.routers();
    }
    
    private middleware():void{
        this.express.use(express.json())
        this.express.use(cors())
    }
    
    private routers():void{
        this.express.use('/api', allRouters);
    }
}

export default new App().express;