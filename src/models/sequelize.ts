
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('falvorfleet', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

