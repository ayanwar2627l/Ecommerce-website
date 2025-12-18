import express from "express";
import Wishlist from "../models/Wishlist.js";

const router = express.Router();

// ➕ Add to wishlist
router.post("/", async (req, res) => {
  console.log("REQUEST BODY:", req.body); // 👈 ADD THIS

  try {
    const exists = await Wishlist.findOne({
      productId: req.body.productId,
    });

    if (exists) {
      return res.status(400).json({ message: "Already in wishlist" });
    }

    const item = new Wishlist(req.body);
    await item.save();

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});


// 📥 Get wishlist items
router.get("/", async (req, res) => {
  try {
    const items = await Wishlist.find();
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ❌ Remove item
router.delete("/:id", async (req, res) => {
  await Wishlist.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
});

export default router;
