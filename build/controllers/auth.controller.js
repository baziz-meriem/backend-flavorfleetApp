"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authService = new auth_service_1.AuthService();
                const { address, email, image, phoneNum, password } = req.body;
                const userDetails = { address, email, image, phoneNum, password };
                const result = yield authService.register(userDetails);
                res.json(result);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Failed to register user from controller." });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authService = new auth_service_1.AuthService();
                const { identifier, password } = req.body;
                const user = yield authService.login(identifier, password);
                res.json(user);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Failed to login user from controller." });
            }
        });
    }
}
exports.AuthController = AuthController;
