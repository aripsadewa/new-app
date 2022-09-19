"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoutes_1 = __importDefault(require("./BaseRoutes"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
class AuthRoutes extends BaseRoutes_1.default {
    routes() {
        this.router.post("/register", AuthController_1.default.show);
        this.router.post("/login", AuthController_1.default.create);
    }
}
exports.default = new AuthRoutes().router;
