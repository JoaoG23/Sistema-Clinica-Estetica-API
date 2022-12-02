import { Request, Response } from "express";
// Type

// Services
import MessageReturns from "../services/MessageReturns";
import CreateDataService from "../services/Create";
import ListOneDataService from "../services/ListOne";
import ListAllService from "../services/ListAll";
import DeleteDataService from "../services/Delete";
import EditDataService from "../services/Edit";

import Funcionario from "../../model/schemas/FuncionarioModel";
import Cliente from "../../model/schemas/ClienteModel";
import User from "../../model/schemas/UserModel";
import Ocupacoes from "../../model/schemas/OcupacoesModel";

class FuncionariosControlllers {
  public async create(req: Request, res: Response) {
    try {
      
      const usuarioFound = await ListOneDataService.execulte(User, {
        id: req.body.id_usuario,
      });
      const ocupacoesFound = await ListOneDataService.execulte(Ocupacoes, {
        id: req.body.id_ocupacao,
      });

      const clienteFound = await ListOneDataService.execulte(Cliente, {
        id_usuario: req.body.id_usuario,
      });
      const funcionarioFound  = await ListOneDataService.execulte(Funcionario, {
        id_usuario: req.body.id_usuario,
      });
      

      if (!usuarioFound) {
        return res
        .status(400)
        .json(new MessageReturns(false, "Esse Usuario não existe"));
      }

      if (!ocupacoesFound) {
        return res
        .status(400)
        .json(new MessageReturns(false, "Essa ocupacão não existe"));
      }

      if (!usuarioFound) {
        return res
        .status(400)
        .json(new MessageReturns(false, "Esse Usuario não existe"));
      }

      if (clienteFound || funcionarioFound) {
        return res
        .status(400)
        .json(new MessageReturns(false, "Cliente ou funcionario já existe! Tente outro usuário"));
      }

      await CreateDataService.execulte(Funcionario, req.body);
      res
        .status(201)
        .json(new MessageReturns(false, "Funcionario inserido com sucesso"));
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Erro ao inserir funcionario"));
      console.error(error);
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const ocupacoes = await ListAllService.execulte(Funcionario);
      res.status(200).json(ocupacoes);
    } catch (error) {
      res.status(400).json(error);
      console.error(error);
    }
  }

  public async listOneById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const funcionarioFound = await ListOneDataService.execulte(Funcionario, {
        id: id,
      });

      if (!funcionarioFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Funcionario not exists"));
      }
      res.status(200).json(funcionarioFound);
    } catch (error) {
      res.status(400).json(new MessageReturns(false, "Error to list Funcionario"));
      console.error(error);
    }
  }



  public async deleteById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const funcionarioFound = await ListOneDataService.execulte(Funcionario, {
        id: idFound,
      });
      if (!funcionarioFound) {
        return res
          .status(400)
          .json(
            new MessageReturns(false, "Funcionario not exists for he to be removed")
          );
      }

      await DeleteDataService.execulte(Funcionario, {
        id: idFound,
      });
      res
        .status(200)
        .json(new MessageReturns(true, "Funcionario deleted with success"));
    } catch (error) {
      res.status(400).json(error);
      console.error(new MessageReturns(false, "Error to delete Funcionario"));
    }
  }

  public async updateById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const funcionarioFound = await ListOneDataService.execulte(Funcionario, {
        id: idFound,
      });

      if (!funcionarioFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Funcionario not exists for updated"));
      }

      await EditDataService.execulte(Funcionario, req.body, {
        id: idFound,
      });

      res
        .status(200)
        .json(new MessageReturns(true, "Funcionario updated with success"));
    } catch (error) {
      res.status(400).json(new MessageReturns(true, "Funcionario updated with success"));
      console.error(error);
    }
  }
}

export default new FuncionariosControlllers();

