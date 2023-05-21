import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';


const authController: AuthController = new AuthController();
const router: Router = Router();
router.post('/login', authController.login);

export { router as authRoutes };