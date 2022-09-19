import { Router, Request, Response } from "express";
import BaseRoutes from "./BaseRoutes";

import AuthController from "../controllers/AuthController";

class AuthRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("/register", AuthController.show);
        this.router.post("/login", AuthController.create);
    }
}

export default new AuthRoutes().router;