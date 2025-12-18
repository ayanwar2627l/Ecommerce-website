import { useEffect, useState } from "react";

export default function Wishlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/wishlist")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const removeItem = async (id) => {
    await fetch(`/wishlist/${id}`, { method: "DELETE" });
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Wishlist ❤️</h1>

      {items.length === 0 && <p>No items in wishlist</p>}

      <div className="grid gap-4">
        {items.map((item) => (
          <div
            key={item._id}
            className="flex items-center bg-white shadow rounded-lg p-4"
          >
            <img
              src={item.image}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="ml-4 flex-1">
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price}</p>
            </div>

            <button
              onClick={() => removeItem(item._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  // 
}
