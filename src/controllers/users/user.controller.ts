import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'
import userCreateService from "../../services/users/userCreate.service"
import userListService from '../../services/users/userList.service'
import userListOneService from '../../services/users/userListOne.service'
import userLoginService from '../../services/users/userLogin.service'
import userSelfDeleteService from '../../services/users/userSelfDelete.service'
import userUpdatePasswordService from '../../services/users/userUpdatePassword.service'

class UserController {
  static async create (req: Request, res: Response) {
    try {
      const { name, email, password } = req.newUser
  
      const newUser = await userCreateService({ name, email, password })
  
      return res.status(201).json({ name, email })
  
    } catch (error) {
      if (error instanceof AppError) {

        handleError(error, res);
      }
    }
  }

  static async list (req: Request, res: Response) {
    try {
      const lisUsers = await userListService()

      return res.status(200).send(lisUsers)
    } catch (error) {
      if (error instanceof AppError) {

        handleError(error, res);
      }
    }
  }

  static async login (req:Request, res:Response) {
    try {
      const { email, password } = req.body;

      const token = await userLoginService({ email, password });

      return res.status(200).json({ "token": token });

    } catch (error) {
      if (error instanceof AppError) {

        handleError(error, res);
      }
    }
  }

  static async listActualUser (req:Request, res:Response) {
    try {

      const email = req.userEmail;

      const user = await userListOneService(email);

      return res.status(200).send(user);

    } catch (error) {
      if (error instanceof AppError) {

        handleError(error, res);
      }
    }
  }

  static async selfDelete (req:Request, res:Response) {
    try {
      
      const email = req.userEmail;

      const user = userSelfDeleteService(email);

      return res.status(200).json({ message: "User deleted with success"});

    } catch (error) {
      if (error instanceof AppError) {

        handleError(error, res);
      }
    }
  }

  static async updatePassword (req:Request, res:Response) {
    try {
      const email = req.userEmail;

      const { password } = req.body;

      if (!password) {
        throw new Error("No password informed")
      }

      const user = await userUpdatePasswordService(email, password);

      return res.status(201).json({ message: "Password updated" });
      
    } catch (error) {
      if (error instanceof AppError) {

        handleError(error, res);
      }
    }
  }
}

export default UserController;