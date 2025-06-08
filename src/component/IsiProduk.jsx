import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Produk5 from '../assets/Produk 5.png';
import Produk6 from '../assets/Produk 6.png';
import Produk7 from '../assets/Produk 7.png';
import Produk8 from '../assets/Produk 8.png';
import Produk9 from '../assets/Produk 9.png';
import Produk10 from '../assets/Produk 10.png';

const IsiProduk = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const produkCookies = [
    { id: 6, nama: "Matcha Greentea", harga: 10000, gambar: Produk5 },
    { id: 7, nama: "Choco Ceres", harga: 10000, gambar: Produk6 },
    { id: 8, nama: "Dark Choco Chip", harga: 10000, gambar: Produk7 },
    { id: 9, nama: "Dry cookies", harga: 10000, gambar: Produk8 },
    { id: 10, nama: "Red Cookies", harga: 10000, gambar: Produk9 },
    { id: 11, nama: "Lotus Cookie", harga: 10000, gambar: Produk10 },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen bg-[#f5f5f5]">
        <div className="container mx-auto px-4 py-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-[#6C3512] mb-8"
            style={{ fontFamily: '"Poetsen One", cursive' }}
          >
            Produk Cookies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {produkCookies.map((produk) => (
              <Link
                key={produk.id}
                to={`/cookies/${produk.id}`}
                className="block"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <img
                    src={produk.gambar}
                    alt={produk.nama}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <div className="p-4 text-center">
                    <h3
                      className="text-xl font-semibold text-[#6C3512] mb-1"
                      style={{ fontFamily: '"Poetsen One", cursive' }}
                    >
                      {produk.nama}
                    </h3>
                    <p className="text-[#8d4c1b] font-medium">Rp {produk.harga.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IsiProduk;
