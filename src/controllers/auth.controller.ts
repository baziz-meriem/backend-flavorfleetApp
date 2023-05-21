import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
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
