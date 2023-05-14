
import { Sequelize, Model, DataTypes } from 'sequelize';

export interface RestaurantAttributes {
  id: number;
  name: string;
  logo: string;
  address: string;
  longitude: number;
  latitude: number;
  type: string;
  rating: number;
  reviews: number;
  phone: string;
  email: string; 
  facebookMobile: string;
  facebookWeb: string;
  InstagramMobile: string;
  InstagramWeb: string;
}

export class Restaurant extends Model<RestaurantAttributes> implements RestaurantAttributes {
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

export const initModels = (sequelize: Sequelize) => {
  Restaurant.init({
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
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
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
