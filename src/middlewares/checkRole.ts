import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { User } from "../entity/User";

export const checkRole = (requiredRole: number) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user.role >= requiredRole) next();
    else res.status(401).send('Nėra teisių');
  };
};