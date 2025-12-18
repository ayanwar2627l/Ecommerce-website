import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";
import { useWishlist } from "../context/WishlistContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    isInWishlist,
    addToWishlist,
    isInSaveForLater,
    addToSaveForLater,
  } = useWishlist();

  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  const handleAddToWishlist = () => {
    if (product) {
      const success = addToWishlist(product);
      if (success) {
        // Optional: show success message
      }
    }
  };

  const handleSaveForLater = () => {
    if (product) {
      addToSaveForLater(product);
    }
  };

  if (!product) {
    return <p className="p-6 text-center">Product not found</p>;
  }

  // Discount logic
  const hasDiscount = quantity > 1;
  const discountedPrice = hasDiscount
    ? Math.round(product.price * 0.8)
    : product.price;

  const totalPrice = discountedPrice * quantity;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* MAIN PRODUCT CARD */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>

          {/* PRICE SECTION */}
          <div className="mt-4">
            {hasDiscount && (
              <span className="inline-block mb-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                🎉 20% discount applied
              </span>
            )}

            <div className="flex items-center gap-3">
              {hasDiscount && (
                <span className="text-gray-400 line-through text-lg">
                  ₹{product.price}
                </span>
              )}

              <span className="text-2xl font-semibold text-green-600">
                ₹{discountedPrice}
              </span>
            </div>

            <p className="mt-2 font-medium">
              Total: ₹{totalPrice}
            </p>
          </div>

          {/* QUANTITY */}
          <div className="mt-4 flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 border rounded px-2 py-1"
            />
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4">
            {!isInWishlist(product.id) ? (
              <button
                onClick={handleAddToWishlist}
                className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
              >
                Add to Wishlist ❤️
              </button>
            ) : (
              <button
                onClick={() => navigate("/wishlist")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                View Wishlist 👀
              </button>
            )}

            <button
              onClick={() =>
                navigate(`/checkout/${product.id}?qty=${quantity}`)
              }
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Buy Now ⚡
            </button>

            <button
              onClick={handleSaveForLater}
              disabled={isInSaveForLater(product.id)}
              className={`px-6 py-3 rounded-lg transition
              ${isInSaveForLater(product.id)
                  ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600 text-white"
                }
            `}
            >
              {isInSaveForLater(product.id) ? "Saved for Later ✅" : "Save for Later 📌"}
            </button>
          </div>
        </div>
      </div>

      {/* ⭐ RELATED PRODUCTS SECTION (ADD THIS PART) */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">You may also like 👕</h2>
          <button
            onClick={() => navigate("/products")}
            className="text-blue-600 font-medium hover:underline"
          >
            View More →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg truncate">
                    {item.name}
                  </h3>
                  <p className="text-green-600 font-bold mt-1">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}