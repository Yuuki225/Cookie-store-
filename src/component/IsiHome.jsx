import HeroImage from "../assets/hero.png";
import ProdukImage from "../assets/Produk.png";
import { Link } from 'react-router-dom';
import { produkList } from '../Data/produkList';
import { motion } from "framer-motion";

const productVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring" }
  }),
};

const IsiHome = () => {
  return (
    <div className="home pt-20">
      {/* Hero Section */}
      <div
        className="hero min-h-screen pt-20 text-white flex items-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Animated Container Section */}
        <motion.div
          className="w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Text */}
          <motion.div
            className="bg-white/10 rounded-3xl p-10 shadow-xl text-white space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-[#ffe6c7] tracking-wide">
              Pesan Sekarang...!
            </p>

            <h1
              className="text-3xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: '"Poetsen One", cursive' }}
            >
              “Every crumb is a reminder of pleasure that must be contained”
            </h1>

            <Link to="/produk">
              <button className="bg-[#6C3512] hover:bg-[#5a2e0f] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                Lihat Produk
              </button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src={ProdukImage}
              alt="Foto Produk"
              className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Produk Section */}
      <div className="produk-lain py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-screen-xl">
          {/* Title */}
          <motion.div
            className="flex flex-col items-center mb-8 text-center max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl font-semibold"
              style={{ fontFamily: '"Poetsen One", cursive', color: '#6C3512' }}
            >
              Our Products
            </h2>
            <p
              className="text-base mt-2 font-semibold text-gray-700"
              style={{ fontFamily: '"Poetsen One", cursive' }}
            >
              Cemilan Store adalah toko yang mempunyai banyak pilihan kue bermacam rasa
            </p>
          </motion.div>

          {/* Product Grid with Animation */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {produkList
              .filter(produk => !["6", "7", "8", "9", "10", "11"].includes(produk.id))
              .map((produk, i) => (
                <motion.div
                  key={produk.id}
                  custom={i}
                  variants={productVariants}
                >
                  <Link to={`/cookies/${produk.id}`}>
                    <div className="bg-white rounded-[30px] shadow-md w-48 h-48 flex items-center justify-center overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
                      <img
                        src={produk.img}
                        alt={produk.name}
                        className="w-full h-full object-cover rounded-[30px]"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
          </motion.div>

          {/* Button */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/produk">
              <button className="bg-[#6C3512] hover:bg-[#5a2e0f] px-6 py-2 rounded-full text-white font-semibold transition-all shadow">
                SEE ALL PRODUCTS
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IsiHome;