import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

export default function SaveForLater() {
  const { saveForLater, moveToWishlist, removeFromSaveForLater } = useWishlist();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Saved for Later 📌</h1>

      {saveForLater.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No items saved for later</p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Browse Products
          </Link>
        </div>
      )}

      {saveForLater.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 mb-4 flex gap-4 items-center bg-white shadow hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded"
          />

          <div className="flex-1">
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>
            <p className="text-gray-500 text-sm mt-1">{item.description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              to={`/product/${item.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
            >
              View Details
            </Link>
            <button
              onClick={() => moveToWishlist(item.id)}
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              Move to Wishlist
            </button>
            <button
              onClick={() => removeFromSaveForLater(item.id)}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
