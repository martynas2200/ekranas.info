import { Request, Response, NextFunction } from "express";

export const checkRole = (requiredRole: number) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user.role >= requiredRole) next();
    else res.status(401).send('Nėra teisių');
  };
};