import express from "express";
import swaggerUi from 'swagger-ui-express'

import swaggerFile from './swagger.json';

import { moviesRoutes } from "./Routes/movies.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/movies", moviesRoutes);

app.listen(4774, () => console.log('Server is running on port 4774'))