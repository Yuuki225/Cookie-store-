import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { FaSpinner } from "react-icons/fa";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi proses submit (API call)
    setTimeout(() => {
      setLoading(false);
      alert("Register success! (simulasi)");
      // Redirect bisa ditambahkan di sini
    }, 2000);
  };

  return (
    <motion.div
      className="min-h-screen flex font-sans"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ type: "tween", duration: 0.6 }}
    >
      {/* Left Image */}
      <div className="hidden md:block w-1/2">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/cookie.jpg')" }}
        ></div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-12">
        <div className="flex flex-col items-center mb-6">
          <LiaCookieBiteSolid className="text-6xl text-brown-500 mb-2" />
          <h1 className="text-3xl font-semibold text-gray-800">Register</h1>
          <p className="text-sm text-gray-500">Create a new Cookie_Store account</p>
        </div>

        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brown-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brown-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brown-400"
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
                Processing...
              </>
            ) : (
              "Register"
            )}
          </button>

          <p className="text-sm text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default Register;
