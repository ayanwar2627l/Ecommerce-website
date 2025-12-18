import { useEffect, useState } from "react";

export default function SaveForLater() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("saveForLater")) || [];
    setItems(saved);
  }, []);

  const moveToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.some((item) => item.id === product.id);

    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    const updated = items.filter((item) => item.id !== product.id);
    setItems(updated);
    localStorage.setItem("saveForLater", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("saveForLater", JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Saved for Later</h1>

      {items.length === 0 && (
        <p className="text-gray-500">No items saved for later.</p>
      )}

      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 mb-4 flex gap-4 items-center"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded"
          />

          <div className="flex-1">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>
          </div>

          <button
            onClick={() => moveToWishlist(item)}
            className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
          >
            Move to Wishlist
          </button>

          <button
            onClick={() => removeItem(item.id)}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
