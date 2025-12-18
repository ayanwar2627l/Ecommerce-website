import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
import wishlistRoutes from "./routes/wishlistRoutes.js";
app.use("/wishlist", wishlistRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
