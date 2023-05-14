"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.Restaurant = void 0;
const sequelize_1 = require("sequelize");
class Restaurant extends sequelize_1.Model {
}
exports.Restaurant = Restaurant;
const initModels = (sequelize) => {
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
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        latitude: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: sequelize_1.DataTypes.FLOAT,
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
        sequelize,
        tableName: 'restaurants',
        timestamps: true,
        underscored: true,
    });
    return {
        Restaurant,
    };
};
exports.initModels = initModels;
// import { Sequelize, Model, DataTypes, Optional } from 'sequelize';
// interface RestaurantAttributes {
//   id: number;
//   name: string;
//   description: string;
//   imageUrl: string;
// }
// interface RestaurantCreationAttributes extends Optional<RestaurantAttributes, 'id'> {}
// class Restaurant extends Model<RestaurantAttributes, RestaurantCreationAttributes> implements RestaurantAttributes {
//   public id!: number;
//   public name!: string;
//   public description!: string;
//   public imageUrl!: string;
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }
// export function initRestaurantModel(sequelize: Sequelize): void {
//   Restaurant.init(
//     {
//       id: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: {
//         type: DataTypes.STRING(128),
//         allowNull: false,
//       },
//       description: {
//         type: DataTypes.TEXT,
//         allowNull: true,
//       },
//       imageUrl: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//       },
//     },
//     {
//       tableName: 'restaurant',
//       sequelize,
//       timestamps: true,
//     },
//   );
// }
// export default Restaurant;
