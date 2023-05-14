"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Restaurant extends sequelize_1.Model {
}
exports.Restaurant = Restaurant;
Restaurant.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    logo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    latitude: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    reviews: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    facebookMobile: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    facebookWeb: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    InstagramMobile: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    InstagramWeb: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    tableName: 'restaurant',
});
