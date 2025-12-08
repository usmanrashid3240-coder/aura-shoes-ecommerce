import express from "express";
import User from "../models/User.js";

const router = express.Router();

// POST /api/auth/register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields are required!" });

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "Email already exists!" });

    // Create new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error. Try again later!" });
  }
});

export default router;
