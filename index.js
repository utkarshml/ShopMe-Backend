import express from 'express';
import dotenv from "dotenv";
import path from 'path';
import ProductRoutes from "./routes/products.routes.js"
import cookiesParser from 'cookie-parser';
import database from './config/db.js';
import cors from "cors"
import ErrorHandler  from './utils/errorHandler.js';     
          
const configPath = path.join(path.resolve(), "/config/.env");
dotenv.config({
    path: configPath
});
export const app = express();
// Set up CORS middleware
app.use(cors())
import { errorMiddleware } from './middlewares/errorMiddleware.js';
database();
app.use(cookiesParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/v1/api", ProductRoutes);
// Error Middleware
app.use((req, res, next) => {
 next(new ErrorHandler(`${req.originalUrl} route not found`, 404))
})
app.use(errorMiddleware);