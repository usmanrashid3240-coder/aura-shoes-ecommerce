// server/models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  description: String,
  image: String, // URL or path
  category: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Product", productSchema);
