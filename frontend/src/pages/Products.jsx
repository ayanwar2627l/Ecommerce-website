import products from "../data/products";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)}
          className="cursor-pointer bg-white shadow rounded-xl overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
