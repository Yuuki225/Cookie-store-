import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const customers = [
  {
    name: "Razwa Arqya",
    phone: "+62 877-8975-3565",
    email: "RazRAz@gmail.com",
    status: "offline",
  },
  {
    name: "Rizal Suhari",
    phone: "+62 831-6218-8771",
    email: "suhari_ardi@gmail.com",
    status: "Online",
  },
  {
    name: "Ananda Putra",
    phone: "+62 812-2099-5629",
    email: "NandaAndy@gmail.com",
    status: "Online",
  },
];

const Dshbrd = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter((cust) =>
    cust.name.toLowerCase().includes(searchTerm.toLowerCase())
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
              className="flex items-center space-x-3 bg-[#6C3512] text-white px-4 py-2 rounded-lg shadow hover:bg-[#DCB283] transition"
            >
              <span>👥</span>
              <span>Customer</span>
            </Link>
            <Link
              to="/product"
              className="flex items-center space-x-3 text-[#6C3512] px-4 py-2 rounded-lg hover:bg-[#DCB283] transition"
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
          List of Customers
        </h2>

        {/* Active Now Card */}
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between mb-6">
          <span className="text-lg font-medium text-gray-600">Active Now</span>
          <span className="text-3xl font-bold text-[#6C3512]">2</span>
        </div>

        {/* Customers Table */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#6C3512]" style={{ fontFamily: '"Poetsen One", cursive' }}>
                All Customers
              </h3>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border pl-10 pr-4 py-2 rounded-full bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DCB283]"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-y-auto max-h-[400px] mt-2">
            <table className="w-full table-auto text-sm">
              <thead className="bg-[#f8f1e9] text-[#6C3512] sticky top-0 z-10">
                <tr>
                  <th className="py-2 text-left">User</th>
                  <th className="py-2 text-left">Phone Number</th>
                  <th className="py-2 text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((cust, idx) => (
                    <tr key={idx} className="border-b hover:bg-[#fcf7f2] transition">
                      <td className="py-3">{cust.name}</td>
                      <td className="py-3">{cust.phone}</td>
                      <td className="py-3">{cust.email}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-6 text-center text-gray-500">
                      No customers found.
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

export default Dshbrd;
