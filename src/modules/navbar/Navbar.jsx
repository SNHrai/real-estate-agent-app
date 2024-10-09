import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Logo from "../../assets/dream-homes.svg";
import { FaHeart } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // ['About', 'Sell', 'Property','Furniture', 'Contact']

  const navItems = [
    { id: 1, navName: "About", navLink: "About" },
    { id: 2, navName: "Sell", navLink: "Sell" },
    { id: 3, navName: "Property", navLink: "Property" },
    { id: 4, navName: "Home Decor", navLink: "Furniture" },
    { id: 5, navName: "Contact", navLink: "Contact" },
  ];

  return (
    <nav className="container bg-[#ffffff]  rounded-3xl">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            {/* <img src={Logo} alt="Logo" className="w-auto h-10 rounded-xl" /> */}
            <span className="ml-2 text-xl font-semibold text-gray-800 amt">
              Dream Homes
            </span>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={`/${item.navLink.toLowerCase()}`}
                className={`text-gray-700 btn-font fs-6 hover:text-blue-600 px-3 py-2 text-sm font-bold relative group ${
                  location.pathname === `/${item.navLink.toLowerCase()}`
                    ? "text-blue-600"
                    : ""
                }`}>
                {item.navName}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ease-in-out ${
                    location.pathname === `/${item.navLink.toLowerCase()}`
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center">
            <Link to="/wishlist" className="mr-4">
              <FaHeart className="w-6 h-6 text-gray-400 transition duration-300 ease-in-out hover:text-red-500" />
            </Link>
            <button className="p-2 text-gray-400 transition duration-300 ease-in-out rounded-full hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/${item.navLink.toLowerCase()}`}
              className={`block px-3 py-2 rounded-md nav-items text-base font-bold fs-6 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition duration-300 ease-in-out ${
                location.pathname === `/${item.navLink.toLowerCase()}`
                  ? "text-blue-600 bg-gray-50"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}>
              {item.navName}
            </Link>
          ))}
          <Link
            to="/wishlist"
            className="flex items-center px-3 py-2 text-base font-bold text-gray-700 transition duration-300 ease-in-out rounded-md nav-items fs-6 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}>
            <FaHeart className="mr-2" />
            Wishlist
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
