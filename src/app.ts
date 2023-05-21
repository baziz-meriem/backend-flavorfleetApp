import express, { Express, Response, Request, NextFunction } from "express";

import {authRoutes} from './routes/auth.routes';
import { restaurantRoutes } from "./routes/restaurant.routes";


const port = 8000;
const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is the entry point");
});

// Routes
app.use('/auth', authRoutes);
app.use('/restaurant', restaurantRoutes); // Use the router object from restaurant.routes

app.use((req: Request, res: Response) => {
  res.type('text/plain');
  res.status(404).send('404 not found');
});

app.use((err: Error, req: Request, res: Response) => {
  console.error(err.message);
  res.type('text/plain');
  res.status(500).send('500 server error');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});


export default app;
