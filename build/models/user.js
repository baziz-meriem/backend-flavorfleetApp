"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class User extends sequelize_1.Model {
    // Function to check if the provided password matches the stored password
    checkPassword(password) {
        return password === this.password;
    }
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    phoneNum: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: sequelize_2.sequelize,
    timestamps: false,
    modelName: 'User',
    tableName: 'users',
});
exports.default = User;
