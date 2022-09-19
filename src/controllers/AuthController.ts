import { Request, Response } from "express";

class AuthController {
    create(req: Request, res: Response): Response {

        return res.send("Create success");
    }
    show(req: Request, res: Response): Response {

        return res.send("");
    }

}

export default new AuthController();