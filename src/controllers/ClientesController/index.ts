import { Request, Response } from "express";
// Type

// Services
import MessageReturns from "../services/MessageReturns";
import CreateDataService from "../services/Create";
import ListOneDataService from "../services/ListOne";
import ListAllService from "../services/ListAll";
import DeleteDataService from "../services/Delete";
import EditDataService from "../services/Edit";
import Cliente from "../../model/schemas/ClienteModel";
import Funcionario from "../../model/schemas/FuncionarioModel";
import Agendamentos from "../../model/schemas/AgendamentosModel";
import TipoServicos from "../../model/schemas/TiposServicosModel";

class ClientesControlllers {
  public async create(req: Request, res: Response) {
    try {
      
      const clienteFound = await ListOneDataService.execulte(Cliente, {
        id_usuario: req.body.id_usuario,
      });
      const funcionarioFound  = await ListOneDataService.execulte(Funcionario, {
        id_usuario: req.body.id_usuario,
      });

      if (clienteFound || funcionarioFound) {
        return res
        .status(400)
        .json(new MessageReturns(false, "Cliente or funcionario already exists with user! You make another"));
      }
      
      await CreateDataService.execulte(Cliente, req.body);
      res
        .status(201)
        .json(new MessageReturns(false, "Cliente inserted with success"));
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error of the inserted Cliente"));
      console.error(error);
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const clientes = await ListAllService.execulte(Cliente);
      res.json(clientes);
    } catch (error) {
      res.status(400).json(error);
      console.error(error);
    }
  }

  public async listOneById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const clienteFound = await ListOneDataService.execulte(Cliente, {
        id: id,
      });

      if (!clienteFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Cliente not exists"));
      }
      res.status(200).json(clienteFound);
    } catch (error) {
      res.status(400).json(new MessageReturns(false, "Error to list Cliente"));
      console.error(error);
    }
  }



  public async deleteById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const clienteFound = await ListOneDataService.execulte(Cliente, {
        id: idFound,
      });
      if (!clienteFound) {
        return res
          .status(400)
          .json(
            new MessageReturns(false, "Cliente not exists for he to be removed")
          );
      }

      await DeleteDataService.execulte(Cliente, {
        id: idFound,
      });
      res
        .status(200)
        .json(new MessageReturns(true, "Cliente deleted with success"));
    } catch (error) {
      res.status(400).json(error);
      console.error(new MessageReturns(false, "Error to delete Cliente"));
    }
  }

  public async updateById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const clienteFound = await ListOneDataService.execulte(Cliente, {
        id: idFound,
      });
      

      if (!clienteFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Cliente not exists for updated"));
      }

      await EditDataService.execulte(Cliente, req.body, {
        id: idFound,
      });

      res
        .status(200)
        .json(new MessageReturns(true, "Cliente updated with success"));
    } catch (error) {
      res.status(400).json(new MessageReturns(true, "Cliente updated with success"));
      console.error(error);
    }
  }


  public async scheduleTheTime(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }
      
      const agendamento = await ListOneDataService.execulte(Agendamentos,{id: idFound});
      const cliente = await ListOneDataService.execulte(Cliente,{id: req.body.id_cliente});
      const tipoServico = await ListOneDataService.execulte(TipoServicos,{id: req.body.id_tipo_servico})

      const validateIfExists = agendamento && cliente ? true : false;
      if (!validateIfExists) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Cliente ou agendamento não existe!"));
      }

      if (!tipoServico) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Esse tipo de servico não existe!"));
      }

      const data = await EditDataService.execulte(Agendamentos, req.body, {
        id: idFound,
      });

      res
        .status(200)
        .json(new MessageReturns(true, "Horario marcado com sucesso"));
    } catch (error) {
      res.status(400).json(new MessageReturns(true, "Erro ao marca horario"));
      console.error(error);
    }
  }



  public async clearTime(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }
      
      const data = await EditDataService.execulte(Agendamentos, req.body, {
        id: idFound,
      });

      res
        .status(200)
        .json(new MessageReturns(true, "Horario desmarcado com sucesso"));
    } catch (error) {
      res.status(400).json(new MessageReturns(true, "Erro ao marca horario"));
      console.error(error);
    }
  }
}

export default new ClientesControlllers();

