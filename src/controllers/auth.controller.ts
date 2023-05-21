import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {

  async register(req: Request, res: Response) {
    try {
      const authService = new AuthService();
      const { address, email,image, phoneNum, password } = req.body;
      const userDetails = { address, email,image, phoneNum, password };
      const result = await authService.register(userDetails);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to register user from controller." });
    }
  }

  async login(req: Request, res: Response) {

    try {
      const authService = new AuthService();
      const { identifier, password } = req.body;
      const user = await authService.login(identifier, password);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to login user from controller." });
    }
  }
}
