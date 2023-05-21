import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';

export interface UserAttributes {
  id: number;
  address: string;
  email: string | null;
  phoneNum: string | null;
  password: string;
}

export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public address!: string;
  public email!: string | null;
  public phoneNum!: string | null;
  public password!: string;

  // Function to check if the provided password matches the stored password
  public checkPassword(password: string): boolean {
    return password === this.password;
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    phoneNum: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'User',
    tableName: 'users',
  }
);

export default User;
