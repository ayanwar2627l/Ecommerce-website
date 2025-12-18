import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, moveToSaveForLater } = useWishlist();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Wishlist ❤️</h1>

      {wishlist.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">Your wishlist is empty</p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Browse Products
          </Link>
        </div>
      )}

      <div className="grid gap-4">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="ml-4 flex-1">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-blue-600 font-bold text-xl">₹{item.price}</p>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                to={`/product/${item.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
              >
                View Details
              </Link>
              <button
                onClick={() => moveToSaveForLater(item.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Save for Later
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
