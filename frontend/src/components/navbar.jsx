import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="/">
            <img className="w-auto h-6 sm:h-7" src={logo} alt="Logo" />
          </a>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="navi font-bold text-lg gap-3 text-black flex flex-col pr-[100px] md:flex-row md:mx-6">
            <a
              className={`my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 md:mx-4 md:my-0 ${
                activeMenu === "Home" ? "text-red-500" : ""
              }`}
              href="/"
              onClick={() => handleMenuClick("Home")}
            >
              Home
            </a>
            <a
              className={`my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 md:mx-4 md:my-0 ${
                activeMenu === "Menu" ? "text-red-500" : ""
              }`}
              href="/menu"
              onClick={() => handleMenuClick("Menu")}
            >
              Menu
            </a>
            <a
              className={`my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 md:mx-4 md:my-0 ${
                activeMenu === "Mobile-app" ? "text-red-500" : ""
              }`}
              href="/mobile"
              onClick={() => handleMenuClick("Mobile-app")}
            >
              Mobile-app
            </a>
            <a
              className={`my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-400 dark:hover:text-red-400 md:mx-4 md:my-0 ${
                activeMenu === "Contact us" ? "text-red-500" : ""
              }`}
              href="/contact"
              onClick={() => handleMenuClick("Contact us")}
            >
              Contact us
            </a>
          </div>

          <div className="flex justify-center md:block">
            <a
              className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span class="absolute top-0 left-0 p-1 text-xs text-white bg-red-500 rounded-full"></span>
            </a>
          </div>
          <div className="px-2">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="19px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                {" "}
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>{" "}
              </svg>
            </a>
          </div>
          <div className="pl-4">
            <a href="#">
              <button className="btn">
                Sign up
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
