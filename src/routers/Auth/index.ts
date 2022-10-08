import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

class Auth {
  public secret: any = process.env.TOKEN_SECRET;

  public async comum(req: Request, res: Response, next: NextFunction) {
    const secret: any = process.env.TOKEN_SECRET;

    const token = req.header("authorization-token");
    if (!token)
      return res
        .status(401)
        .send({ situation: false, msg: "Você ainda não está logado.." });
    try {
      await jwt.verify(token, secret);

      next();
    } catch (error) {
      res.status(401).json(error);
    }
  }
}

export default new Auth();
