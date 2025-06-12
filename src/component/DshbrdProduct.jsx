import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const DshbrdProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { name: "Matcha", stock: 100 },
    { name: "Red Velvet", stock: 0 },
    { name: "Choco Cookies", stock: 0 },
    { name: "Chocolate Cookies", stock: 20 },
    { name: "Chocolate Chip Cookies", stock: 30 },
    { name: "Oreo Cookies", stock: 50 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#f5f5f5] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6 flex flex-col justify-between border-r">
        <div>
          <h1 className="text-2xl font-bold mb-10 text-[#6C3512]" style={{ fontFamily: '"Poetsen One", cursive' }}>
            Dashboard
          </h1>
          <nav className="space-y-3">
            <Link
              to="/dashboard"
              className="flex items-center space-x-3 text-[#6C3512] px-4 py-2 rounded-lg hover:bg-[#DCB283] transition"
            >
              <span>👥</span>
              <span>Customer</span>
            </Link>
            <Link
              to="/product"
              className="flex items-center space-x-3 bg-[#6C3512] text-white px-4 py-2 rounded-lg shadow hover:bg-[#DCB283] hover:text-[#6C3512] transition"
            >
              <span>📦</span>
              <span>Product</span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-3 mt-6">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-[#6C3512]"
          />
          <div>
            <div className="text-sm font-semibold text-[#6C3512]">Admin</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#6C3512]" style={{ fontFamily: '"Poetsen One", cursive' }}>
          List of Products
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#6C3512]" style={{ fontFamily: '"Poetsen One", cursive' }}>
                All Products
              </h3>
              <p className="text-sm text-[#8d4c1b] font-medium">Cookies </p>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border pl-10 pr-4 py-2 rounded-full bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DCB283]"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Table Header */}
          <table className="w-full table-fixed text-sm text-left">
            <thead className="bg-[#f8f1e9] text-[#6C3512] sticky top-0 z-10">
              <tr>
                <th className="w-1/3 py-2">Product Name</th>
                <th className="w-1/3 py-2">Current Stock</th>
                <th className="w-1/3 py-2">Status</th>
              </tr>
            </thead>
          </table>

          {/* Table Body */}
          <div className="overflow-y-auto max-h-[400px] mt-2">
            <table className="w-full table-fixed text-sm">
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.name} className="border-b hover:bg-[#fcf7f2] transition">
                      <td className="w-1/3 py-3">{product.name}</td>
                      <td className="w-1/3 py-3">{product.stock}</td>
                      <td className="w-1/3 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                            product.stock === 0
                              ? "bg-red-100 text-red-600 border-red-300"
                              : "bg-green-100 text-green-700 border-green-300"
                          }`}
                        >
                          {product.stock === 0 ? "Unstock" : "In Stock"}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-6 text-center text-gray-500">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DshbrdProduct;
