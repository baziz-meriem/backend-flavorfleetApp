import { Request, Response } from 'express';
import { RestaurantsService } from '../services/restaurant.service';

export class RestaurantsController {
  async getAll(req: Request, res: Response) {
    try {
      const restaurantsService = new RestaurantsService();
      console.log("hello");
      const restaurants = await restaurantsService.getAll();
      res.json(restaurants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to get restaurants in controler." });
    }
  }
}
