import { Request, Response, NextFunction } from "express";

export const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  
  if (!req.session || !req.session.user) {
      res.status(401).send('Prašome prisijungti!');
      return;
  }
  else next();
};