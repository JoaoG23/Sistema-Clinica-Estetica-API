import { Request, Response } from "express";
// Type

// Services
import MessageReturns from "../services/MessageReturns";
import CreateDataService from "../services/Create";
import ListOneDataService from "../services/ListOne";
import ListAllService from "../services/ListAll";
import DeleteDataService from "../services/Delete";
import EditDataService from "../services/Edit";
import TipoServicos from "../../model/schemas/TiposServicosModel";

class TipoServicosControlllers {
  public async create(req: Request, res: Response) {
    try {
      
      await CreateDataService.execulte(TipoServicos, req.body);
      res
        .status(201)
        .json(new MessageReturns(false, "Tipo de Servicos inserted with success"));
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error of the inserted TipoServicos"));
      console.error(error);
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const ocupacoes = await ListAllService.execulte(TipoServicos);
      res.status(200).json(ocupacoes);
    } catch (error) {
      res.status(400).json(error);
      console.error(error);
    }
  }

  public async listOneById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const TipoServicosFound = await ListOneDataService.execulte(TipoServicos, {
        id: id,
      });

      if (!TipoServicosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Tipo de Servicos not exists"));
      }
      res.status(200).json(TipoServicosFound);
    } catch (error) {
      res.status(400).json(new MessageReturns(false, "Error to list TipoServicos"));
      console.error(error);
    }
  }



  public async deleteById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const TipoServicosFound = await ListOneDataService.execulte(TipoServicos, {
        id: idFound,
      });
      if (!TipoServicosFound) {
        return res
          .status(400)
          .json(
            new MessageReturns(false, "Tipo de Servicos not exists for he to be removed")
          );
      }

      await DeleteDataService.execulte(TipoServicos, {
        id: idFound,
      });
      res
        .status(200)
        .json(new MessageReturns(true, "Tipo de Servicos deleted with success"));
    } catch (error) {
      res.status(400).json(error);
      console.error(new MessageReturns(false, "Error to delete TipoServicos"));
    }
  }

  public async updateById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const TipoServicosFound = await ListOneDataService.execulte(TipoServicos, {
        id: idFound,
      });

      if (!TipoServicosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Tipo de Servicos not exists for updated"));
      }

      await EditDataService.execulte(TipoServicos, req.body, {
        id: idFound,
      });

      res
        .status(200)
        .json(new MessageReturns(true, "Tipo de Servicos updated with success"));
    } catch (error) {
      res.status(400).json(new MessageReturns(true, "Tipo de Servicos updated with success"));
      console.error(error);
    }
  }
}

export default new TipoServicosControlllers();

