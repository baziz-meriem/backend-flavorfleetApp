import User, { UserAttributes } from "../models/User";
import { Op } from 'sequelize';

export class AuthService {
  async register(userDetails: UserAttributes) {
    try {
      // Check if the user with the provided email or phone number already exists
      const existingUser: UserAttributes | null = await User.findOne({
        where: {
          [Op.or]: [{ email: userDetails.email }, { phoneNum: userDetails.phoneNum }],
        },
      });

      if (existingUser) {
        // User with the same email or phone number already exists
        return { success: false, message: "User with the same email or phone number already exists." };
      }

      // Create a new user
      const newUser: UserAttributes = await User.create(userDetails);

      // Registration successful
      return { success: true, user: newUser };
    } catch (error) {
      // Error occurred during registration
      console.error("Failed to register user:", error);
      return { success: false, message: "Failed to register user." };
    }
  }

  async login(identifier: string, password: string) {
    try {
      // Find the user based on the provided identifier (email or phone number)
      const user: UserAttributes | null = await User.findOne({
        where: {
          [Op.or]: [{ email: identifier }, { phoneNum: identifier }],
        },
      });

      // Check if the user exists and the password matches
      if (user && User.prototype.checkPassword.call(user, password)) {
        // Authentication successful
        return { success: true, user };
      } else {
        // Invalid identifier or password
        return { success: false, message: "Invalid identifier or password." };
      }
    } catch (error) {
      // Error occurred during login
      console.error("Failed to login user:", error);
      return { success: false, message: "Failed to login user." };
    }
  }
}
