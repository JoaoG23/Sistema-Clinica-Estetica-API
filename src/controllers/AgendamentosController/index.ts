import { Request, Response } from "express";
// Type

// Services
import MessageReturns from "../services/MessageReturns";
import CreateDataService from "../services/Create";
import ListOneDataService from "../services/ListOne";
import ListAllService from "../services/ListAll";
import DeleteDataService from "../services/Delete";
import EditDataService from "../services/Edit";
import ListAllByCriteriaService from "../services/ListAllByCriteria";
import Agendamentos from "../../model/schemas/AgendamentosModel";

class AgendamentosControlllers {
  public async create(req: Request, res: Response) {
    try {

      /// valida se usuario na existe
      // const agendamentosFound = await ListOneDataService.execulte(Agendamentos, {
      //   id_usuario: req.body.id_usuario,
      // });
      // if (agendamentosFound) {
      //   return res
      //   .status(400)
      //   .json(new MessageReturns(false, "Cliente "));
      // }

      const created = await CreateDataService.execulte(Agendamentos, req.body);

      
      res
        .status(201)
        .json(new MessageReturns(false, "Agendamento inserted with success"));
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error of the inserted Agendamento"));
      console.error(error);
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const agendamentos = await ListAllService.execulte(Agendamentos);
      res.status(200).json(agendamentos);
      console.log(agendamentos);
    } catch (error) {
      res.status(400).json(error);
      console.error(error);
    }
  }

  public async listOneById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const agendamentosFound = await ListOneDataService.execulte(Agendamentos, {
        id: id,
      });

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento not exists"));
      }
      res.status(200).json(agendamentosFound);
    } catch (error) {
      res.status(400).json(new MessageReturns(false, "Error to list Agendamento"));
      console.error(error);
    }
  }

  // Depois excluir
  public async listAllForIdUser(req: Request, res: Response) {
    try {
      const { idUser } = req.params;
      const agendamentosFound = await ListAllByCriteriaService.execulte(Agendamentos, {
        userId: idUser,
      });

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento not exists"));
      }
      res.status(200).json(agendamentosFound);
    } catch (error) {
      res.status(400).json(new MessageReturns(false, "Error to list Agendamento"));
      console.error(error);
    }
  }

  public async deleteById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const agendamentosFound = await ListOneDataService.execulte(Agendamentos, {
        id: idFound,
      });
      if (!agendamentosFound) {
        return res
          .status(400)
          .json(
            new MessageReturns(false, "User not exists for he to be removed")
          );
      }

      await DeleteDataService.execulte(Agendamentos, {
        id: idFound,
      });
      res
        .status(200)
        .json(new MessageReturns(true, "Agendamento deleted with success"));
    } catch (error) {
      res.status(400).json(error);
      console.error(new MessageReturns(false, "Error to delete Agendamento"));
    }
  }

  public async updateById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const agendamentosFound = await ListOneDataService.execulte(Agendamentos, {
        id: idFound,
      });

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento not exists for updated"));
      }

      await EditDataService.execulte(Agendamentos, req.body, {
        id: idFound,
      });

      res
        .status(200)
        .json(new MessageReturns(true, "Agendamento updated with success"));
    } catch (error) {
      res.status(400).json(new MessageReturns(true, "Agendamento updated with success"));
      console.error(error);
    }
  }
}

export default new AgendamentosControlllers();