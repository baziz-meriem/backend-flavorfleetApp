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
exports.RestaurantsController = void 0;
const restaurant_service_1 = require("../services/restaurant.service");
class RestaurantsController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const restaurantsService = new restaurant_service_1.RestaurantsService();
                console.log("hello");
                const restaurants = yield restaurantsService.getAll();
                res.json(restaurants);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Failed to get restaurants in controler." });
            }
        });
    }
}
exports.RestaurantsController = RestaurantsController;
