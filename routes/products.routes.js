import express from "express";
import {
  AddProduct,
  GetAllProducts,
} from "../controllers/ProdectController.js";
const Router = express.Router();

Router.get("/products", GetAllProducts);
Router.post("/add", AddProduct);
export default Router;