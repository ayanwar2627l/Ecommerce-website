import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import SaveForLater from "./pages/SaveForLater";
import Products from "./pages/Products";
import { WishlistProvider } from "./context/WishlistContext";

export default function App() {
  return (
    <WishlistProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/Save-For-Later" element={<SaveForLater />} />
      </Routes>
    </WishlistProvider>
  );
}
