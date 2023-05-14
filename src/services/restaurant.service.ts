import { Restaurant } from "../models/restaurant";

export class RestaurantsService {
  async getAll() {
    try {
      const restaurants = await Restaurant.findAll();
      return restaurants;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to get restaurants in service.");
    }
  }

  


}
