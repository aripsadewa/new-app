import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
    console.log("middleware in here");
    next();
}