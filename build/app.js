"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurant_routes_1 = require("./routes/restaurant.routes");
// const sequelize = new Sequelize('flavorfleet', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });
// import { initRestaurantModel } from './models/restaurant.model';
// initRestaurantModel(sequelize);
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello here is the entry point");
});
app.use('/restaurants', restaurant_routes_1.restaurantRoutes);
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 not found');
});
app.use((err, req, res) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 server error');
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
