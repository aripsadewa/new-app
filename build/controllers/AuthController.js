"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    create(req, res) {
        return res.send("Create success");
    }
    show(req, res) {
        return res.send("");
    }
}
exports.default = new AuthController();
