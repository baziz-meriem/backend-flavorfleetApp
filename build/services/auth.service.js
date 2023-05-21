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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const User_1 = __importDefault(require("../models/User"));
const sequelize_1 = require("sequelize");
class AuthService {
    login(identifier, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find the user based on the provided identifier (email or phone number)
                const user = yield User_1.default.findOne({
                    where: {
                        [sequelize_1.Op.or]: [{ email: identifier }, { phoneNum: identifier }],
                    },
                });
                // Check if the user exists and the password matches
                if (user && User_1.default.prototype.checkPassword.call(user, password)) {
                    // Authentication successful
                    return { success: true, user };
                }
                else {
                    // Invalid identifier or password
                    return { success: false, message: "Invalid identifier or password." };
                }
            }
            catch (error) {
                // Error occurred during login
                console.error("Failed to login user:", error);
                return { success: false, message: "Failed to login user." };
            }
        });
    }
}
exports.AuthService = AuthService;
