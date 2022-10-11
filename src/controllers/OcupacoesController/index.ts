import { Request, Response } from "express";
// Type
import { PrevilegieUser } from "../../types/PrevilegieUser";

// Services
import MessageReturns from "../services/MessageReturns";
import CreateDataService from "../services/Create";
import ListOneDataService from "../services/ListOne";
import ListAllService from "../services/ListAll";
import DeleteDataService from "../services/Delete";
import EditDataService from "../services/Edit";
import Ocupacoes from "../../model/schemas/OcupacoesModel";

class OcupacoesControlllers {
  public async create(req: Request, res: Response) {
    try {

      await CreateDataService.execulte(Ocupacoes, req.body);
      res
        .status(201)
        .json(new MessageReturns(false, "Ocupacao inserted with success"));
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error of the inserted Ocupacao"));
      console.error(error);
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const ocupacoes = await ListAllService.execulte(Ocupacoes);
      res.status(200).json(ocupacoes);
    } catch (error) {
      res.status(400).json(error);
      console.error(error);
    }
  }

  public async listOneById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const ocupacoesFound = await ListOneDataService.execulte(Ocupacoes, {
        id: id,
      });

      if (!ocupacoesFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Ocupacao not exists"));
      }
      res.status(200).json(ocupacoesFound);
    } catch (error) {
      res.status(400).json(new MessageReturns(false, "Error to list Ocupacoes"));
      console.error(error);
    }
  }



  public async deleteById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const ocupacoesFound = await ListOneDataService.execulte(Ocupacoes, {
        id: idFound,
      });
      if (!ocupacoesFound) {
        return res
          .status(400)
          .json(
            new MessageReturns(false, "Ocupacao not exists for he to be removed")
          );
      }

      await DeleteDataService.execulte(Ocupacoes, {
        id: idFound,
      });
      res
        .status(200)
        .json(new MessageReturns(true, "Ocupacao deleted with success"));
    } catch (error) {
      res.status(400).json(error);
      console.error(new MessageReturns(false, "Error to delete Ocupacao"));
    }
  }

  public async updateById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const ocupacoesFound = await ListOneDataService.execulte(Ocupacoes, {
        id: idFound,
      });

      if (!ocupacoesFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Ocupacao not exists for updated"));
      }

      await EditDataService.execulte(Ocupacoes, req.body, {
        id: idFound,
      });

      res
        .status(200)
        .json(new MessageReturns(true, "Ocupacao updated with success"));
    } catch (error) {
      res.status(400).json(new MessageReturns(true, "Ocupacao updated with success"));
      console.error(error);
    }
  }
}

export default new OcupacoesControlllers();

