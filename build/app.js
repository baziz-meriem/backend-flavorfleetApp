"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("./routes/auth.routes");
const restaurant_routes_1 = require("./routes/restaurant.routes");
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello, this is the entry point");
});
// Routes
app.use('/auth', auth_routes_1.authRoutes);
app.use('/restaurant', restaurant_routes_1.restaurantRoutes); // Use the router object from restaurant.routes
app.use((req, res) => {
    res.type('text/plain');
    res.status(404).send('404 not found');
});
app.use((err, req, res) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500).send('500 server error');
});
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
exports.default = app;
