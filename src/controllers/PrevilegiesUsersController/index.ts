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
import ListAllByCriteriaService from "../services/ListAllByCriteria";
import PrevilegiesUsers from "../../model/schemas/PrevilegiesUserModel";

class PrevilegieUsersControlllers {
  public async create(req: Request, res: Response) {
    try {

      await CreateDataService.execulte(PrevilegiesUsers, req.body);
      res
        .status(201)
        .json(new MessageReturns(false, "Previlegie inserted with success"));
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error of the inserted PrevilegieUsers"));
      console.error(error);
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const previlegieUsers = await ListAllService.execulte(PrevilegiesUsers);
      res.status(200).json(previlegieUsers);
    } catch (error) {
      res.status(400).json(error);
      console.error(error);
    }
  }

  public async listOneById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const previlegieUsersFound = await ListOneDataService.execulte(PrevilegiesUsers, {
        id: id,
      });

      if (!previlegieUsersFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Previlegie not exists"));
      }
      res.status(200).json(previlegieUsersFound);
    } catch (error) {
      res.status(400).json(new MessageReturns(false, "Error to list PrevilegieUserss"));
      console.error(error);
    }
  }

  // Depois excluir
  public async listAllForIdUser(req: Request, res: Response) {
    try {
      const { idUser } = req.params;
      const previlegieUsersFound = await ListAllByCriteriaService.execulte(PrevilegiesUsers, {
        userId: idUser,
      });

      if (!previlegieUsersFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Previlegie not exists"));
      }
      res.status(200).json(previlegieUsersFound);
    } catch (error) {
      res.status(400).json(new MessageReturns(false, "Error to list Previlegie"));
      console.error(error);
    }
  }

  public async deleteById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const previlegieUsersFound = await ListOneDataService.execulte(PrevilegiesUsers, {
        id: idFound,
      });
      if (!previlegieUsersFound) {
        return res
          .status(400)
          .json(
            new MessageReturns(false, "User not exists for he to be removed")
          );
      }

      await DeleteDataService.execulte(PrevilegiesUsers, {
        id: idFound,
      });
      res
        .status(200)
        .json(new MessageReturns(true, "Previlegie deleted with success"));
    } catch (error) {
      res.status(400).json(error);
      console.error(new MessageReturns(false, "Error to delete Previlegie"));
    }
  }

  public async updateById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const previlegieUsersFound = await ListOneDataService.execulte(PrevilegiesUsers, {
        id: idFound,
      });

      if (!previlegieUsersFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Previlegie not exists for updated"));
      }

      await EditDataService.execulte(PrevilegiesUsers, req.body, {
        id: idFound,
      });

      res
        .status(200)
        .json(new MessageReturns(true, "Previlegie updated with success"));
    } catch (error) {
      res.status(400).json(new MessageReturns(true, "Previlegie updated with success"));
      console.error(error);
    }
  }
}

export default new PrevilegieUsersControlllers();

