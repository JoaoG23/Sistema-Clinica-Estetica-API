import { Request, Response } from "express";

// Services
import Perimeter from "../services/calcsServices/Perimeter/Perimeter";
import Area from "../services/calcsServices/Area/Area";
import CreatorData from "../services/mainServices/CreatorData";
import ViewerAllData from "../services/mainServices/ViewerAllData";

// Model
import Retangulo from "../model/schemas/Retangulo/RetanguloModel";
import { RetanguloInput } from "../model/schemas/Retangulo/interface/RetanguloAttributes";
import { MessageReturnDefault } from "../services/messageServices/MessageReturnDefault";

class RetanguloController {
  public async createOne(req: Request, res: Response) {
    try {
      const { largura, altura, descricao } = req.body;

      const perimetro = Perimeter.retanguloCalculate(altura, largura);
      const area = Area.calculeAreaRetangulo(altura, largura);

      const retanguloData: RetanguloInput = {
        largura,
        altura,
        descricao,
        perimetro,
        area,
      };

      const retanguloCreated = await CreatorData.createModel(
        Retangulo,
        retanguloData
      );
      res.status(201).json(retanguloCreated);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturnDefault(false, "Erro to insert retangulo"));
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const retangulosList = await ViewerAllData.listAllModels(Retangulo);
      res.status(200).json(retangulosList);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturnDefault(false, "Erro to list retangulos"));
    }
  }
}

export default new RetanguloController();
