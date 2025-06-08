import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { AnimatePresence } from "framer-motion";
import Lupapw from "./Lupapw";
import Home from "./Home";
import IsiCookies from "../component/IsiCookies";
import Produk from "./Produk";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Lupapw />} />
        <Route path="produk" element={<Produk />} />
        <Route path="/cookies/:id" element={<IsiCookies />} />
      </Routes>
    </AnimatePresence>
  );
};

function Router() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default Router;
