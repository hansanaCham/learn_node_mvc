const express = require("express");
const Router = express.Router();

const productController = require("../controller/product");

Router.get("/", productController.getProducts);

module.exports = Router;
