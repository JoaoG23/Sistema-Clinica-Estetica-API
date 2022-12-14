import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import UserModel from "../../model/schemas/UserModel";

import { Previlegie } from "../../types/Previlegie";
import { User } from "../../types/User";
// Services
import MessageReturns from "../services/MessageReturns";
import CreateDataService from "../services/Create";
import ListOneDataService from "../services/ListOne";
import ListAllService from "../services/ListAll";
import DeleteDataService from "../services/Delete";
import EditDataService from "../services/Edit";
import ListUserLoginByUsername from "../services/specificServices/ListUserLoginByUsername";
import GenerateToken from "../services/GenerateToken";
import Funcionario from "../../model/schemas/FuncionarioModel";
import Cliente from "../../model/schemas/ClienteModel";

class UsersControlllers {
  public async create(req: Request, res: Response) {
    try {
      const { email, userName } = req.body;
      const emailFound = await ListOneDataService.execulte(UserModel, {
        email: email,
      });

      if (emailFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Esse email já existe tente outro"));
      }

      const userNameFound = await ListOneDataService.execulte(UserModel, {
        userName: userName,
      });

      if (userNameFound) {
        return res
          .status(400)
          .json(
            new MessageReturns(false, "Esse userName já existe! Tente outro!")
          );
      }

      const dataNewUser: User = {
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password),
        email: req.body.email,
        idPrevilegies: req.body.idPrevilegies,
      };

      await CreateDataService.execulte(UserModel, dataNewUser);
      res
        .status(201)
        .json(new MessageReturns(true, "Usuário criado com sucesso"));
    } catch (error) {
      res
        .status(400)
        .send(new MessageReturns(false, "Houve um erro na criação usuário"));
      console.error(error);
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const users = await ListAllService.execulte(UserModel);
      res.status(200).json(users);
    } catch (error) {
      res
        .status(400)
        .send(new MessageReturns(false, "There is error operation with user"));
      console.error(error);
    }
  }

  public async listOneForUserUsername(req: Request, res: Response) {
    try {
      const { userName } = req.params;
      const userFound = await ListOneDataService.execulte(UserModel, {
        userName: userName,
      });
      res.status(200).json(userFound);
    } catch (error) {
      res
        .status(400)
        .send(new MessageReturns(false, "There is error operation with user"));
      console.error(error);
    }
  }

  public async listOneForId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userFound = await ListOneDataService.execulte(UserModel, {
        id: id,
      });

      if (!userFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "User not exists"));
      }
      res.status(200).json(userFound);
    } catch (error) {
      res
        .status(400)
        .send(new MessageReturns(false, "There is error operation with user"));
      console.error(error);
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { userName, password } = req.body;

      const response = await ListUserLoginByUsername.execulte(
        userName as string
      );

      const userFound: Previlegie = response[0];
      if (!userFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Password or user incorrect"));
      }

      // Verify user Criptografia
      const passwordEPasswordDatabaseMatch = bcrypt.compareSync(
        password,
        userFound.password
      );

      if (!passwordEPasswordDatabaseMatch) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Password or user incorrect"));
      }

      const token: any = await GenerateToken.execulte({
        id: userFound.id,
        previlegie: userFound.powerforce,
      });

      // Verifica se e funcionario ou cliente

      let dadosImportantes;
      const isFuncionario = await ListOneDataService.execulte(Funcionario, {
        id_usuario: userFound.id,
      });
      const isCliente = await ListOneDataService.execulte(Cliente, {
        id_usuario: userFound.id,
      });

      if (isFuncionario) {
        dadosImportantes = isFuncionario;
      } else {
        dadosImportantes = isCliente;
      }

      console.log("Funcionario ", isFuncionario);
      console.log("Cliente", isCliente);
      type ShowUserData = Omit<Previlegie, "password">;

      // Dados do Usuario
      const userData: ShowUserData = {
        id: userFound.id,
        powerforce: userFound.powerforce,
        datas: dadosImportantes,
      };

      // insert token in code
      res.header("authorization-token", token);
      res.status(200).json({
        userData: userData,
        situation: true,
        msg: "User logged in success",
        tokenUser: token,
      });
    } catch (error) {
      res
        .status(404)
        .json(
          new MessageReturns(false, "User not exists or there is one error")
        );
      console.error(error);
    }
  }

  public async deleteUserForId(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const userFound = await ListOneDataService.execulte(UserModel, {
        id: idFound,
      });
      if (!userFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, "Esse Usuário não existe"));
      }

      const deletar = await DeleteDataService.execulte(UserModel, { id: idFound });
      res
        .status(200)
        .json(new MessageReturns(true, "Usuário removido com sucesso"));
    } catch (error) {
      res
        .status(400)
        .send(new MessageReturns(false, "Houve um erro na remoção do usuário"));
      console.error(error);
    }
  }

  public async updateUserForId(req: Request, res: Response) {
    try {
      let idFound = req.params.id;
      if (!idFound) {
        idFound = req.body.id;
      }

      const userFound = await ListOneDataService.execulte(UserModel, {
        id: idFound,
      });

      if (!userFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, 'Usuário não existe no sistema'));
      }

      const newData: User = {
        name: req.body.name,
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password),
        phonenumber: req.body.phonenumber,
        email: req.body.email,
      };

      await EditDataService.execulte(UserModel, newData, {
        id: idFound,
      });

      res
        .status(200)
        .json(new MessageReturns(true, 'Usuário editado com sucesso'));
    } catch (error) {
      res
        .status(400)
        .send(new MessageReturns(false, 'Houve um erro na edição do usuário'));
      console.error(error);
    }
  }

  public async forgetPassword(req: Request, res: Response) {
    try {
      const { email, password }: User = req.body;

      const userFound = await ListOneDataService.execulte(UserModel, {
        email: email,
      });

      console.log(userFound);
      if (!userFound) {
        return res
          .status(400)
          .json(new MessageReturns(false, 'Esse email não existe no sistema'));
      }

      await EditDataService.execulte(
        UserModel,
        {
          password: bcrypt.hashSync(password),
        },
        {
          email: email,
        }
      );

      res
        .status(200)
        .json(
          new MessageReturns(
            true,
            'Senha alterada com sucesso, Tente se logar com a nova senha!'
          )
        );
    } catch (error) {
      res
        .status(400)
        .send(new MessageReturns(false, 'Houve um erro na troca de senha'));
      console.error(error);
    }
  }
}

export default new UsersControlllers();
