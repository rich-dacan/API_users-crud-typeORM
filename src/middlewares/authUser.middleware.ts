import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const bearerToken = token.split(" ");

  jwt.verify(
    bearerToken[1], 
    process.env.JWT_SECRET as string, 
    (err: any, decoded: any) => {
      
      req.userEmail =  decoded.email;
      next();
    }
  );

};