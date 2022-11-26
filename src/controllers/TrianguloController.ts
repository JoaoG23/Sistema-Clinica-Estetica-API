import { Request, Response } from "express";

// Services
import { MessageReturnDefault } from "../services/messageServices/MessageReturnDefault";
import Area from "../services/calcsServices/Area/Area";
import CreatorData from "../services/mainServices/CreatorData";
import ViewerAllData from "../services/mainServices/ViewerAllData";
import Perimeter from "../services/calcsServices/Perimeter/Perimeter";

// Model
import Triangulo from "../model/schemas/Triangulo/TrianguloModel";
import { TrianguloInput } from "../model/schemas/Triangulo/interface/TrianguloAttributes";

class TrianguloController {
  public async createOne(req: Request, res: Response) {
    try {
      const { altura_lados, descricao } = req.body;

      const area = Area.calculeAreaTriangulo(altura_lados);
      const perimetro = Perimeter.trianguloCalculate(altura_lados);

      const trianguloData: TrianguloInput = {
        descricao,
        altura_lados,
        perimetro,
        area,
      };

      const retanguloCreated = await CreatorData.createModel(
        Triangulo,
        trianguloData
      );

      res.status(201).json(retanguloCreated);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturnDefault(false, "Erro to insert the triangulo"));
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const trianguloList = await ViewerAllData.listAllModels(Triangulo);
      res.status(200).json(trianguloList);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturnDefault(false, "Erro to list triangulos"));
    }
  }
}

export default new TrianguloController();
