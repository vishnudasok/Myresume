import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-6">

        <div className="text-2xl font-bold flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
              My
            </span>
            <span className="text-white hover:text-gray-300 transition-colors duration-300">
              Resume
            </span>
          </NavLink>
        </div>


        <nav className="hidden sm:flex space-x-8 text-sm font-medium">
          <NavLink
            to="/pricing"
            className={`hover:text-green-400 ${location.pathname === "/pricing" ? "text-green-500 border-green-500" : ""
              }`}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/testimonial"
            className={`hover:text-green-400 ${location.pathname === "/testimonial" ? "text-green-500 border-green-500" : ""
              }`}
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/features"
            className={`hover:text-green-400 ${location.pathname === "/features" ? "text-green-500 border-green-500" : ""
              }`}
          >
            Features
          </NavLink>
          <NavLink
            to="/contact"
            className={`hover:text-green-400 ${location.pathname === "/contact" ? "text-green-500 border-green-500" : ""
              }`}
          >
            Contact
          </NavLink>
        </nav>


        <div className="hidden sm:flex items-center space-x-6">
          <NavLink to="/cart" className="relative">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
            />
            <span className="absolute top-[-6px] right-[-6px] bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </NavLink>
        </div>


        {!isMobileMenuOpen && (
          <button
            className="text-white text-2xl sm:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </div>


      {isMobileMenuOpen && (
        <div
          className={`sm:hidden bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white absolute top-0 right-0 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out w-2/3 max-w-[260px] rounded-lg`}
        >
          <div className="flex justify-between items-center py-2 px-4 border-b border-gray-700">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              className="text-white text-2xl focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <ul className="flex flex-col space-y-2 mt-4 px-4 text-center text-xs">
            <li>
              <NavLink
                to="/pricing"
                className={`block py-2 text-sm hover:text-green-400 ${location.pathname === "/pricing" ? "text-green-500" : ""
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonial"
                className={`block py-2 text-sm hover:text-green-400 ${location.pathname === "/testimonial" ? "text-green-500" : ""
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={`block py-2 text-sm hover:text-green-400 ${location.pathname === "/features" ? "text-green-500" : ""
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={`block py-2 text-sm mb-4 hover:text-green-400 ${location.pathname === "/contact" ? "text-green-500" : ""
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
