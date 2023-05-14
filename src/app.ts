import express, {Express, Response, Request, NextFunction} from "express"


import {restaurantRoutes} from "./routes/restaurant.routes"

import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize('flavorfleet', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });

// import { initRestaurantModel } from './models/restaurant.model';

// initRestaurantModel(sequelize);


const port = 8000

const app : Express = express()

app.use(express.json());


app.get("/", (req : Request, res : Response) => {
    res.send("Hello here is the entry point")
})

app.use('/restaurants', restaurantRoutes);


app.use((req : Request, res : Response) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 not found')
})

app.use((err : Error, req : Request, res : Response) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 server error')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})