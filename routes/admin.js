const express = require("express");
const path = require("path");
const Router = express.Router();

const productsController = require("../controller/product");

Router.get("/add-product", productsController.getAddProduct);

Router.post("/add-product", productsController.postAddProduct);

module.exports = Router;
