
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('flavorfleet', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});