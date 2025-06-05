import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LiaCookieBiteSolid } from "react-icons/lia";

const Isilupapw = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Link reset password telah dikirim ke email kamu (simulasi)");
    }, 2000);
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4 font-sans"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <LiaCookieBiteSolid className="text-5xl text-[#a87c4f] mb-2" />
          <h1 className="text-2xl font-semibold text-gray-800">Lupa Password</h1>
          <p className="text-sm text-gray-500 text-center mt-1">
            Masukkan email kamu untuk menerima link reset password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a87c4f]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 ${
              loading ? "bg-[#a87c4f]/70 cursor-not-allowed" : "bg-[#a87c4f] hover:bg-[#926a40]"
            } text-white py-2 rounded-md font-medium transition-colors duration-300`}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Mengirim...
              </>
            ) : (
              "Kirim Link Reset"
            )}
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-4">
          Sudah ingat password?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Isilupapw;
