import Product from "../models/ProductModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import asyncTryCatch from "../utils/asyncTryCatch.js";
import websiteFeatures from "../utils/feature.js";

// create product --- api/v1/api/product/new for admin only
export const AddProduct = asyncTryCatch(async (req, res, next) => {
  const {
    name,
    description,
    price,
    images,
    category,
  } = req.body;
  const productAddDatabase = await Product.create({
    name,
    description,
    price,
    images,
    category,
   
  });
  res.status(201).json({
    success: true,
    message: "Product added successfully",
    productAddDatabase,
  });
});
// get all products --- api/v1/api/product for all users
export const GetAllProducts = asyncTryCatch(async (req, res, next) => {
  const resPerPage = 6;
  const productCount = await Product.countDocuments();
  const search = new websiteFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);
  const products = await search.query;
  res.status(200).json({
    success: true,
    message: "All products",
    products,
    productCount,
  });
});

// delete product --- api/v1/api/product/:id for admin only
export const deleteProduct = asyncTryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await Product.deleteOne();
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

