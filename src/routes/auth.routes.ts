import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const authController: AuthController = new AuthController();
const router: Router = Router();

router.post('/login', authController.login);
router.post('/register', authController.register); // Add the register route

export { router as authRoutes };