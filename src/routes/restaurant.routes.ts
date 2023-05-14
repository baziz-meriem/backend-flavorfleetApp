import { Router } from 'express';
import { RestaurantsController } from '../controllers/restaurant.controller';


const restaurantController = new RestaurantsController();

const router = Router();                                                                                                                            

router.get('/getAll', restaurantController.getAll);

export { router as restaurantRoutes };

