import { Request, Response } from "express";

// Services
import SumData from "../services/mainServices/SumData";

// Model
import Retangulo from "../model/schemas/Retangulo/RetanguloModel";
import { MessageReturnDefault } from "../services/messageServices/MessageReturnDefault";
import Triangulo from "../model/schemas/Triangulo/TrianguloModel";

class EstatisticasController {
  public async listOneSumAllArea(req: Request, res: Response) {
    const columnToCalculate = "area";
    try {
      const sumAllAreasRetangulos = await SumData.sumAllModelByColumn(
        Retangulo,
        columnToCalculate
      );
      const sumAllAreasTriangulos = await SumData.sumAllModelByColumn(
        Triangulo,
        columnToCalculate
      );

      const retanguloSumAreaExtracted =
        sumAllAreasRetangulos[0].dataValues.total_calculated;
      const trianguloSumAreaExtracted =
        sumAllAreasTriangulos[0].dataValues.total_calculated;

      const retanguloTotalSumConvertedToNumber = parseFloat(
        retanguloSumAreaExtracted
      );
      const trianguloTotalSumConvertedToNumber = parseFloat(
        trianguloSumAreaExtracted
      );

      const totalAllAreasSum =
        retanguloTotalSumConvertedToNumber + trianguloTotalSumConvertedToNumber;

      res.status(200).json(totalAllAreasSum);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturnDefault(false, "Erro in the list all sum"));
    }
  }
}

export default new EstatisticasController();
