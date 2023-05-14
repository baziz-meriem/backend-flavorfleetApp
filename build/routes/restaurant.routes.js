"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantRoutes = void 0;
const express_1 = require("express");
const restaurant_controller_1 = require("../controllers/restaurant.controller");
const restaurantController = new restaurant_controller_1.RestaurantsController();
const router = (0, express_1.Router)();
exports.restaurantRoutes = router;
router.get('/getAll', restaurantController.getAll);
