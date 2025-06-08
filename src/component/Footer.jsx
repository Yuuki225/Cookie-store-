const Footer = () => {
  return (
    <footer id="footer">
      <div className="bg-gradient-to-r from-[#ffe6c7] via-[#fff7e6] to-[#ffe6c7] text-[#6C3512]">
        <div className="container mx-auto px-4">
          <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand & Address */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <h2 className="text-2xl font-bold tracking-wide mb-2" style={{ fontFamily: '"Poetsen One", cursive' }}>
                Cookies Store
              </h2>
              <p className="text-sm leading-relaxed text-[#8d4c1b] text-center md:text-left">
                Jl. Rancabolang No. 29<br />
                Manjahlega, Kec. Rancasari<br />
                Kota Bandung, Jawa Barat, Indonesia<br />
                40286
              </p>
            </div>
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/6288802347761"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6C3512] hover:bg-[#D2AC67] text-white rounded-full w-11 h-11 flex items-center justify-center shadow transition"
                aria-label="Whatsapp"
              >
                <i className="ri-whatsapp-fill text-2xl"></i>
              </a>
              <a
                href="https://instagram.com/Rzwa223"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6C3512] hover:bg-[#D2AC67] text-white rounded-full w-11 h-11 flex items-center justify-center shadow transition"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-2xl"></i>
              </a>
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6C3512] hover:bg-[#D2AC67] text-white rounded-full w-11 h-11 flex items-center justify-center shadow transition"
                aria-label="Tiktok"
              >
                <i className="ri-tiktok-fill text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#6C3512] text-white text-center py-3 text-sm tracking-wide">
        &copy; {new Date().getFullYear()} Cookies Store &mdash; All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;