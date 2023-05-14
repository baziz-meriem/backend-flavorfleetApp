"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataTypes = require("sequelize").DataTypes;
var _restaurant = require("./restaurant");
function initModels(sequelize) {
    var restaurant = _restaurant(sequelize, DataTypes);
    return {
        restaurant,
    };
}
exports.default = initModels;
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
// import { Sequelize } from 'sequelize';
// import Restaurant, RestaurantAttributes  from './restaurant.model';
// export interface Models {
//   Restaurant: typeof Restaurant;
// }
// export type ModelAttributes = {
//   [key in keyof Models]: {
//     [key2 in keyof InstanceType<Models[key]>]: InstanceType<Models[key]>[key2];
//   };
// };
// export const initModels = (sequelize: Sequelize): Models => {
//   const models: Models = {
//     Restaurant: Restaurant.initModel(sequelize),
//   };
//   return models;
// };
