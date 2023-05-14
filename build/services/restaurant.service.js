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
exports.RestaurantsService = void 0;
const restaurant_1 = require("../models/restaurant");
class RestaurantsService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const restaurants = yield restaurant_1.Restaurant.findAll();
                return restaurants;
            }
            catch (error) {
                console.error(error);
                throw new Error("Failed to get restaurants in service.");
            }
        });
    }
}
exports.RestaurantsService = RestaurantsService;
