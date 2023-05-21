import User, { UserAttributes } from "../models/User";
import { Op } from 'sequelize';

export class AuthService {
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
