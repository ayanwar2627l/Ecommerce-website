import { useParams } from "react-router-dom";
import products from "../data/products";

export default function Checkout() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const confirmOrder = () => {
    alert("Order placed successfully 🎉");
  };

  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="border rounded-lg p-4 flex gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 object-cover rounded"
        />

        <div>
          <h2 className="font-semibold text-lg">{product.name}</h2>
          <p className="text-gray-600 mt-1">₹{product.price}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-xl font-bold">Total: ₹{product.price}</span>

        <button
          onClick={confirmOrder}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
