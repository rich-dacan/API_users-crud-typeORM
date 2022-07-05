import { Request, Response } from 'express'
import userCreateService from "../../services/users/userCreate.service"
import userListService from '../../services/users/userList.service'
import userListOneService from '../../services/users/userListOne.service'
import userLoginService from '../../services/users/userLogin.service'

class UserController {
  static async create (req: Request, res: Response) {
    try {
      const { name, email, password } = req.body
  
      const newUser = await userCreateService({name, email, password})
  
      return res.status(201).json({ name, email })
  
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({
          error: error.name,
          message: error.message
        })
      }
    }
  }

  static async list (req: Request, res: Response) {
    try {
      const lisUsers = await userListService()

      return res.status(200).send(lisUsers)
    } catch (error) {
      
    }
  }

  static async userLogin (req:Request, res:Response) {
    try {
      const { email, password } = req.body;

      const token = await userLoginService({ email, password });

      return res.status(200).json({ "token": token });

    } catch (error) {
      if (error instanceof Error) {

        return res.status(401).send({
          "error": error.name,
          "message": error.message
        })
      }
    }
  }

  static async userListOne (req:Request, res:Response) {
    try {
      // const { authorization } = req.headers.authorization;

      const listUser = await userListOneService({ 
        authorization:req.headers.authorization
      })

      return res.status(200).send(listUser);

    } catch (error) {
      if (error instanceof Error) {

        return res.status(401).send({
          "error": error.name,
          "message": error.message
        })
      }
    }
  }
}

export default UserController;