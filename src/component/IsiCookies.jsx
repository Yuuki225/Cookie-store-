import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { produkList } from '../Data/produkList';
import Footer from './Footer';

const IsiCookies = () => {
  const { id } = useParams();
  const produk = produkList.find((item) => item.id === id);
  const produkRef = useRef(null);

  useEffect(() => {
    if (produkRef.current) {
      produkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  if (!produk) {
    return (
      <p className="text-center pt-32 text-lg text-red-500">
        Produk tidak ditemukan
      </p>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <Navbar />

      <main
        ref={produkRef}
        className="flex-grow pt-28 container mx-auto px-4 mb-10"
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-center text-[#6C3512] mb-10"
          style={{ fontFamily: '"Poetsen One", cursive' }}
        >
          Detail Cookies
        </h1>

        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
          {/* Gambar */}
          <div className="w-full md:w-1/2 aspect-square rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-[#fdfdfd]">
            <img
              src={produk.img}
              alt={produk.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Detail */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2
              className="text-2xl font-bold text-[#6C3512] mb-2"
              style={{ fontFamily: '"Poetsen One", cursive' }}
            >
              {produk.name}
            </h2>
            <p className="text-[#8d4c1b] text-lg font-medium mb-6">
              {produk.price}
            </p>
            <p className="text-gray-700 mt-4 mb-6 leading-relaxed">
              {produk.desc}
            </p>
            <a
              href={`https://wa.me/6288802347761?text=${encodeURIComponent(
                `Halo, saya ingin memesan Cookies ${produk.name} dengan harga ${produk.price}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#6C3512] text-white px-6 py-3 rounded-full hover:bg-[#DCB283] transition duration-300 font-semibold"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IsiCookies;
