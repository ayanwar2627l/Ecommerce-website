import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  image: String,
});

export default mongoose.model("Wishlist", wishlistSchema);
