import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// POST /api/messages
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email | !message) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error. Try again later!" });
  }
});

export default router;
