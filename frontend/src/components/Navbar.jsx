import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const { wishlist, saveForLater } = useWishlist();

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
            className="px-4 py-2 rounded hover:bg-blue-50 text-blue-600 font-medium relative"
          >
            Wishlist
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/save-for-later"
            className="px-4 py-2 rounded hover:bg-yellow-50 text-yellow-600 font-medium relative"
          >
            Save for Later
            {saveForLater.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {saveForLater.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
