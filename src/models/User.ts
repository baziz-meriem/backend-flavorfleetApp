import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';

export interface UserAttributes {
  id?: number; // Mark id as optional
  address: string;
  email: string | null;
  phoneNum: string | null;
  password: string;
  image: string | null; // Provide a default value if needed
}

export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public address!: string;
  public email!: string | null;
  public phoneNum!: string | null;
  public password!: string;
  public image!: string | null;

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
    image: {
      type: DataTypes.STRING, // Assuming the image will be stored as a string (path or URL)
      allowNull: true,
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
