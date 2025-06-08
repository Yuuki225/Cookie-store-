import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CookieLogo from '../assets/cookies.png';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleScrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      setShow(false); // close menu on mobile
    }
  };

  const menuActive = show ? 'left-0' : '-left-full';

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollActive = scroll
    ? 'py-2 bg-white shadow-md'
    : 'py-4 bg-white';

  return (
    <nav className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${scrollActive}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={CookieLogo}
              alt="Logo"
              className="h-14 w-14 object-contain"
            />
            <h3 className="text-xl sm:text-2xl font-bold font-[BubblegumSans]">Cookies Store</h3>
          </div>

          {/* Menu */}
          <ul
            className={`fixed md:static flex flex-col md:flex-row items-center gap-8 md:gap-12 text-black transition-all duration-300 md:bg-transparent md:shadow-none bg-white p-6 md:p-0 rounded-md shadow-lg md:translate-y-0 top-1/2 -translate-y-1/2 ${menuActive}`}
          >
            <li>
              <Link to="/" className="font-medium opacity-75 hover:opacity-100 transition">
                Home
              </Link>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/xyoUVm833cFx5ty2A"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium opacity-75 hover:opacity-100 transition"
              >
                Lokasi
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="font-medium opacity-75 hover:opacity-100 transition cursor-pointer"
                onClick={handleScrollToFooter}
              >
                Kontak
              </a>
            </li>
            <li>
              <Link to="/login" className="hidden md:block ml-6 font-medium opacity-75 hover:opacity-100 transition">
                Admin
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <button
            className="text-3xl md:hidden focus:outline-none"
            onClick={handleClick}
          >
            {show ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;