import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          ShopEase
        </Link>

        <div className="flex gap-4">
          <Link
            to="/wishlist"
            className="px-4 py-2 rounded hover:bg-blue-50 text-blue-600 font-medium"
          >
            Wishlist
          </Link>

          <Link
            to="/save-for-later"
            className="px-4 py-2 rounded hover:bg-yellow-50 text-yellow-600 font-medium"
          >
            Save for Later
          </Link>
        </div>
      </div>
    </nav>
  );
}
