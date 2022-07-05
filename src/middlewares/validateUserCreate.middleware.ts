import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

import { Request, Response, NextFunction } from "express";
import { IUserCreate } from "../interfaces/users"
import * as yup from 'yup';
import { SchemaOf } from "yup";

export const userCreateSchema: SchemaOf<IUserCreate> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required()
});

export const validateUserCreateMiddleware = (schema: SchemaOf<IUserCreate>) => async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = req.body;

    try {
      const validatedData = await schema.validate(
        data,
        {
          abortEarly: false,
          stripUnknown: true
        }
      )

      req.newUser = validatedData;

      next();

    } catch (error: any) {

      return res.status(400).json({
        "error": error.errors?.join(', ')
      })
      
    }

  } catch (error) {
    
    next(error)
  }
}