import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [navIsShown, setnavIsShown] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 px-4 h-20 flex justify-between items-center transition-colors duration-300 ${
        isHome && !navBg
          ? "bg-transparent text-white"
          : "bg-white text-black shadow-md"
      }`}
    >
      <h1 className="px-2">Athirapilly Holidays</h1>
      <ul className="hidden md:flex font-['Helvetica'] space-x-6 text-white">
        <li>
          <Link
            to="/"
            className={`transition-colors duration-300 hover:text-[#44b50c] ${
              isHome && !navBg ? "text-white" : "text-black"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/tours"
            className={`transition-colors duration-300 hover:text-[#44b50c] ${
              isHome && !navBg ? "text-white" : "text-black"
            }`}
          >
            Tours
          </Link>
        </li>
        <li>
          <Link
            to="/hotels"
            className={`transition-colors duration-300 hover:text-[#44b50c] ${
              isHome && !navBg ? "text-white" : "text-black"
            }`}
          >
            Hotels
          </Link>
        </li>
        <li>
          <Link
            to="/vehicles"
            className={`transition-colors duration-300 hover:text-[#44b50c] ${
              isHome && !navBg ? "text-white" : "text-black"
            }`}
          >
            Vehicles
          </Link>
        </li>
        <li>
          <Link
            to="/mybookings"
            className={`transition-colors duration-300 hover:text-[#44b50c] ${
              isHome && !navBg ? "text-white" : "text-black"
            }`}
          >
            My Bookings
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
      {!navIsShown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#44b50c"
          className="w-8 h-8 md:hidden"
          onClick={toggleNavIsShown}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      )}
      {navIsShown && (
        <div className="md:hidden fixed z-50 inset-0 bg-white">
          {/* Overlay Content */}
          <div className="relative h-full w-full px-6 py-8">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#44b50c"
                className="w-8 h-8"
                onClick={toggleNavIsShown}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            {/* Brand Logo */}
            <h1 className="text-3xl font-bold text-[#44b50c] mb-10">
              Athirapilly Holidays
            </h1>

            {/* Navigation Links */}
            <ul className="space-y-6 mb-10">
              <li>
                <a
                  href="#"
                  className="block text-xl text-gray-800 hover:text-[#44b50c] py-3 border-b border-[#e5f5dc]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-xl text-gray-800 hover:text-[#44b50c] py-3 border-b border-[#e5f5dc]"
                >
                  Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-xl text-gray-800 hover:text-[#44b50c] py-3 border-b border-[#e5f5dc]"
                >
                  Hotels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-xl text-gray-800 hover:text-[#44b50c] py-3 border-b border-[#e5f5dc]"
                >
                  Vehicles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-xl text-gray-800 hover:text-[#44b50c] py-3 border-b border-[#e5f5dc]"
                >
                  My Bookings
                </a>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-[#44b50c] hover:bg-[#3a9a0a] text-white py-3 rounded-lg font-medium transition-all shadow-md">
                Search
              </button>
              <button className="w-full bg-white text-[#44b50c] hover:bg-[#f0f9e8] py-3 rounded-lg font-medium transition-all border-2 border-[#44b50c]">
                Account
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
