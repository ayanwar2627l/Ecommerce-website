import { Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleGetStarted = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section - Two Column Layout */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Shop Smarter. Decide Later.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Save every product you love, review them when you're ready, and complete purchases with confidence. Your wishlist stays with you, across every session.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Start Saving Products
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Your Wishlist</h3>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {products.length} items
              </span>
            </div>
            <div className="space-y-3">
              {products.slice(0, 3).map((product) => (
                <div key={product.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                  <div className="flex-1">
                    <p className="font-medium text-sm text-gray-900">{product.name}</p>
                    <p className="text-blue-600 font-semibold text-sm">₹{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How the Wishlist Works - Horizontal Step Flow */}
      {/*  */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Four steps to smarter shopping
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Discover Products
              </h3>
              <p className="text-gray-600">
                Browse through curated collections and find items that match your style
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Save to Wishlist
              </h3>
              <p className="text-gray-600">
                One-click save. Your wishlist is stored in MongoDB and persists across sessions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Review Anytime
              </h3>
              <p className="text-gray-600">
                Access your saved items whenever you need. Compare, reconsider, refine
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Move to Cart
              </h3>
              <p className="text-gray-600">
                Ready to buy? Transfer items to your cart in one action and complete checkout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Wishlist Features - Grid Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Built for Real Shoppers
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Features that help you shop with clarity
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Persistent Storage
              </h3>
              <p className="text-gray-600">
                All wishlist data stored securely in MongoDB. Your items remain saved even after logout or session expiry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Instant Actions
              </h3>
              <p className="text-gray-600">
                Add, remove, or move items without delay. Built with React for fast, responsive interactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Clean Management
              </h3>
              <p className="text-gray-600">
                Organize saved products with simple controls. No clutter, no confusion—just your choices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Seamless Cart Transition
              </h3>
              <p className="text-gray-600">
                Move items from wishlist to cart instantly. Backend powered by Express handles state transitions smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Wishlist App - Split Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose This Wishlist
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Traditional e-commerce forces immediate decisions. We give you time and control.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg">Reduced Purchase Hesitation</h4>
                    <p className="text-blue-100">Save now, decide later. No pressure to buy before you're ready.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg">Organized Shopping Experience</h4>
                    <p className="text-blue-100">All your favorite products in one place, accessible anytime.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg">Faster Decision Making</h4>
                    <p className="text-blue-100">Compare saved items side-by-side and finalize purchases with clarity.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Start Building Your Wishlist
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Explore products and save the ones you love
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="text-blue-600 font-bold mt-1 text-xl">
                    ₹{product.price}
                  </p>

                  <Link
                    to={`/product/${product.id}`}
                    className="mt-4 block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call To Action - Centered Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Wishlist is Waiting
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stop losing track of products you love. Start saving them today and shop on your own terms.
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Browse Products Now
          </Link>
        </div>
      </section>

    </div>
  );
}
