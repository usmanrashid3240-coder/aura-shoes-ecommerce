import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import messagesRoute from "./routes/messages.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(
  "mongodb+srv://umarrashid3240_db_user:us-aq-2009@clusteraurashoes.99jxgcy.mongodb.net/?appName=ClusterAuraShoes",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/messages", messagesRoute);

// Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
