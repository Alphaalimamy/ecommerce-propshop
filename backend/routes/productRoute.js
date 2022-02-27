import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const product = await Product.find({});

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      throw new Error("Product not found");
    }
  })
);

export default router;
