// server/routes/productRoutes.js
import express from "express";
import { addProduct, getProducts } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// public
router.get("/", getProducts);

// admin only - protect it
router.post("/", protect, addProduct);

export default router;
