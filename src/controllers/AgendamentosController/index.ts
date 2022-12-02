import { Request, Response } from "express";
// Model
import Cliente from "../../model/schemas/ClienteModel";
import Agendamentos from "../../model/schemas/AgendamentosModel";
import Funcionario from "../../model/schemas/FuncionarioModel";
import TipoServicos from "../../model/schemas/TiposServicosModel";

// Services
import MessageReturns from "../services/MessageReturns";
import CreateDataService from "../services/Create";
import ListOneDataService from "../services/ListOne";
import ListAllService from "../services/ListAll";
import DeleteDataService from "../services/Delete";
import EditDataService from "../services/Edit";
import ListAllByCriteriaService from "../services/ListAllByCriteria";
import TodosAgendamentoDoCliente from "../services/specificServices/TodosAgendamentoDoCliente";
import TodosAgendamentoDoFuncionario from "../services/specificServices/TodosAgendamentoDoFuncionario";
import AgendamentoDoClienteHoje from "../services/specificServices/AgendamentoDoClienteHoje";
import AgendamentoDoFuncionarioHoje from "../services/specificServices/AgendamentoDoFuncionarioHoje";
import MarcadosOuNaoAgendamentoDoFuncionario from "../services/specificServices/MarcadosOuNaoAgendamentoDoFuncionario";

class AgendamentosControlllers {
  public async create(req: Request, res: Response) {
    try {
      const { id_funcionario, horario, data } = req.body;

      //
      const agora = new Date();
      const horarioAtual = agora.toLocaleTimeString();
      const dataAtual = agora.toLocaleDateString();
      const horarioAtualMaiorHorarioSelecionado = horario > horarioAtual;
      const dataAtualMaiorDataSelecionada = data >= dataAtual;

      const validaSeHorarioEDataMaiorQueAtual =
        horarioAtualMaiorHorarioSelecionado || dataAtualMaiorDataSelecionada;

      if (!validaSeHorarioEDataMaiorQueAtual) {
        return res
          .status(400)
          .json(
            new MessageReturns(
              false,
              "Nao pode criar um agendamento na data passada, Tente outro horario"
            )
          );
      }

      const isValidateIfExistsHorarioAndFuncionario =
        await ListOneDataService.execulte(Agendamentos, {
          horario: horario,
          id_funcionario: id_funcionario,
          data: data,
        });

      if (isValidateIfExistsHorarioAndFuncionario) {
        return res
          .status(400)
          .json(
            new MessageReturns(
              false,
              "Nao pode criar um agendamento em um horário que já existe, Tente outro horario"
            )
          );
      }

      const isFuncionarioFound = await ListOneDataService.execulte(
        Funcionario,
        { id: id_funcionario }
      );
      if (!isFuncionarioFound) {
        return res
          .status(400)
          .json(
            new MessageReturns(
              false,
              "Nao pode marca horário com um funcionario que não existe"
            )
          );
      }

      await CreateDataService.execulte(Agendamentos, req.body);

      res
        .status(201)
        .json(new MessageReturns(false, "Agendamento inserido com sucesso"));
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Erro ao inserir o Agendamento"));
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
      const agendamentosFound = await ListOneDataService.execulte(
        Agendamentos,
        {
          id: id,
        }
      );

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento not exists"));
      }
      res.status(200).json(agendamentosFound);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error to list Agendamento"));
      console.error(error);
    }
  }

  // Depois excluir
  public async listAllForIdUser(req: Request, res: Response) {
    try {
      const { idUser } = req.params;
      const agendamentosFound = await ListAllByCriteriaService.execulte(
        Agendamentos,
        {
          userId: idUser,
        }
      );

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento nao existe"));
      }
      res.status(200).json(agendamentosFound);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error to list Agendamento"));
      console.error(error);
    }
  }

  public async listAllByIdCliente(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const agendamentosFound = await TodosAgendamentoDoCliente.execulte(id);

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento nao existe"));
      }
      res.status(200).json(agendamentosFound);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error to list Agendamento"));
      console.error(error);
    }
  }

  public async listAllByIdClienteAndDate(req: Request, res: Response) {
    try {
      const { id, data } = req.query;

      const agendamentosFound = await AgendamentoDoClienteHoje.execulte(
        id,
        data
      );

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento nao existe"));
      }
      res.status(200).json(agendamentosFound);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error to list Agendamento"));
      console.error(error);
    }
  }

  public async listAllByIdFuncionario(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const agendamentosFound = await TodosAgendamentoDoFuncionario.execulte(
        id
      );

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento not exists"));
      }
      res.status(200).json(agendamentosFound);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error to list Agendamento"));
      console.error(error);
    }
  }

  public async listAllByIdFuncionarioAndDate(req: Request, res: Response) {
    try {
      const { id, data } = req.query;

      const agendamentosFound = await AgendamentoDoFuncionarioHoje.execulte(
        id,
        data
      );

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento nao existe"));
      }
      res.status(200).json(agendamentosFound);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error to list Agendamento"));
      console.error(error);
    }
  }


  public async listAllByIdFuncionarioDataMarcados(req: Request, res: Response) {
    try {
      const { id, data } = req.query;

      const agendamentosFound = await MarcadosOuNaoAgendamentoDoFuncionario.execulte(
        id,
        data,
        true
      );

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento nao existe"));
      }
      res.status(200).json(agendamentosFound);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error to list Agendamento"));
      console.error(error);
    }
  }

  public async listAllByIdFuncionarioDataDesmarcados(req: Request, res: Response) {
    try {
      const { id, data } = req.query;

      const agendamentosFound = await MarcadosOuNaoAgendamentoDoFuncionario.execulte(
        id,
        data,
        false
      );

      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento nao existe"));
      }
      res.status(200).json(agendamentosFound);
    } catch (error) {
      res
        .status(400)
        .json(new MessageReturns(false, "Error to list Agendamento"));
      console.error(error);
    }
  }

  public async deleteById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const agendamentosFound = await ListOneDataService.execulte(
        Agendamentos,
        {
          id: idFound,
        }
      );
      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento procurado não existe"));
      }

      await DeleteDataService.execulte(Agendamentos, {
        id: idFound,
      });
      res
        .status(200)
        .json(new MessageReturns(true, "Agendamento deletado com sucesso"));
    } catch (error) {
      res.status(400).json(error);
      console.error(new MessageReturns(false, "Error ao deletar agendamento"));
    }
  }

  public async updateById(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const agendamentosFound = await ListOneDataService.execulte(
        Agendamentos,
        {
          id: idFound,
        }
      );
      if (!agendamentosFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Agendamento procurado não existe"));
      }

      await EditDataService.execulte(Agendamentos, req.body, {
        id: idFound,
      });
      res
        .status(200)
        .json(new MessageReturns(true, "Agendamento atualizado com sucesso"));
    } catch (error) {
      res.status(400).json(new MessageReturns(false, "Erro no agendamento"));
      console.error(error);
    }
  }

  public async scheduleTheTime(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const { id_cliente, id_tipo_servico } = req.body;
      
      const agendamento = await ListOneDataService.execulte(Agendamentos, {
        id: idFound,
      });
      const cliente = await ListOneDataService.execulte(Cliente, {
        id: id_cliente,
      });
      const tipoServico = await ListOneDataService.execulte(TipoServicos, {
        id: id_tipo_servico,
      });

      const validateIfExists = agendamento && cliente ? true : false;
      if (!validateIfExists) {
        return res
          .status(400)
          .json(
            new MessageReturns(false, "Cliente ou agendamento não existe!")
          );
      }

      if (!tipoServico) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Esse tipo de servico não existe!"));
      }

      const dadosMarcacao = {
        id_cliente: id_cliente,
        is_marcado:true,
        id_tipo_servico: id_tipo_servico,
      };

      await EditDataService.execulte(Agendamentos, dadosMarcacao, {
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

      // deixa null a desmarcando a marcação
      const dadosMarcacao = {
        id_cliente: null,
        is_marcado:false,
        id_tipo_servico: null,
      };

     await EditDataService.execulte(Agendamentos, dadosMarcacao, {
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

export default new AgendamentosControlllers();
