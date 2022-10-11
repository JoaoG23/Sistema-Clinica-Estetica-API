import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

class Auth {
  public async user(req: Request, res: Response, next: NextFunction) {
    const secret: string = process.env.TOKEN_SECRET;

    const token = req.header("authorization-token");
    if (!token)
      return res
        .status(401)
        .send({ situation: false, msg: "Você ainda não está logado.." });
    try {
      await jwt.verify(token, secret);

      req.userData = await jwt.verify(token, secret);
      next();
    } catch (error) {
      res.status(401).json(error);
    }
  }

  public async operador(req: Request, res: Response, next: NextFunction) {
    if (req.userData.previlegie === 2) {
      console.log(req.userData)
      next();
    } else {
      res
        .status(401)
        .json({
          situation: false,
          msg: "Acesso negado: Você não é funcionário.",
        });
    }
  }

  public async admin(req: Request, res: Response, next: NextFunction) {
    if (req.userData.previlegie === 1) {
      next();
    } else {
      res
        .status(401)
        .json({
          situation: false,
          msg: 'Acesso negado: Você não é administrador.',
        });
    }
  }
}

export default new Auth();
