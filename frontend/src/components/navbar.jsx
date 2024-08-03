import {
  faCartPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"; // Import the specific icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "Mobile-app", path: "/mobile" },
    { title: "Contact us", path: "/contact" },
  ];

  return (
    <nav className=" bg-white border-b mt-3 w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block mt-1">
          <a href="/">
            <img
              src={assets.logo}
              width={130}
              height={50}
              className="mb-3"
              alt="Tomato logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-black lg:text-[16px] md:text-[13px] font-semibold  "
              >
                <a href={item.path} className="block  hover:text-[#FF4C24]">
                  {item.title}
                </a>
              </li>
            ))}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li></li>
              <li>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-700 size-7 mt-2 hover:text-[#B15429]"
                />
              </li>
              <li>
                <Link to="/cart">
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    className="text-gray-700 lg:size-7  md:size-[24px] mt-2 hover:text-[#B15429] "
                  />
                </Link>
              </li>
              <li className="">
                <a
                  // Replace with your actual path
                  className="block py-3  px-4 font-medium text-center cursor-pointer text-white bg-[#FF4C24] hover:bg-red-500 active:bg-red-700 active:shadow-none rounded-full shadow md:inline"
                  onClick={() => setShowLogin(true)}
                >
                  Sign in
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
