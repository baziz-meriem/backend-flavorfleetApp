
import { Model, DataTypes} from 'sequelize';
import  {sequelize } from './sequelize';

class Restaurant extends Model {
  public id!: number;
  public name!: string;
  public logo!: string;
  public address!: string;
  public longitude!: number;
  public latitude!: number;
  public type!: string;
  public rating!: number;
  public reviews!: number;
  public phone!: string;
  public email!: string;
  public facebookMobile!: string;
  public facebookWeb!: string;
  public InstagramMobile!: string;
  public InstagramWeb!: string;
}


Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    reviews: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facebookMobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facebookWeb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    InstagramMobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    InstagramWeb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'restaurant',
  },
);

export { Restaurant };


