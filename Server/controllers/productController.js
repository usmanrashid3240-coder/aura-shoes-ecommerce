// server/controllers/productController.js
import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  try {
    const data = req.body;
    const product = await Product.create(data);
    res.status(201).json({ message: "Product added", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
