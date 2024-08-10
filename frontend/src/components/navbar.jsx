import { faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "Mobile-app", path: "/mobile" },
    { title: "Contact us", path: "/contact" },
  ];
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <>
      <nav className="bg-white border-b mt-3 w-full md:static  md:border-none">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block mt-1">
            <a href="/">
              <img
                src={assets.logo}
                width={130}
                height={50}
                className="mb-3 mx-3"
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
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 lg:space-y-4 md:space-x-9 md:ml-4  ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-2  lg:gap-5  md:text-sm md:text-nowrap ">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="text-black lg:text-[18px]  font-semibold relative"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 hover:text-[#FF4C24] ${
                        isActive
                          ? "text-[#FF4C24] after:content-[''] after:block after:h-1 after:bg-[#FF4C24] after:mt-1"
                          : "after:content-[''] after:block after:h-1 after:bg-transparent after:mt-1"
                      }`
                    }
                    onClick={() => setState(false)} // Close menu on click
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
              <div className="space-y-3 items-center gap-x-4 md:gap-x-6 md:flex md:space-y-0 ">
                <li>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-gray-700 lg:size-7 md:size-6  mt-2 hover:text-[#B15429]"
                  />
                </li>
                <li className="relative">
                  <NavLink to="/cart">
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      className="text-gray-700 lg:size-7 md:size-[24px] mt-2 hover:text-[#B15429]"
                    />
                    {getTotalCartAmount() > 0 && (
                      <div className="absolute top-0 right-0 mt-[1.7px] mb-2 ml-3 w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                    )}
                  </NavLink>
                </li>
                {!token ? (
                  <li className=" ">
                    <a
                      className="block  py-3 px-4 font-medium text-center cursor-pointer text-white bg-[#FF4C24] hover:bg-red-500 active:bg-red-700 active:shadow-none rounded-full shadow md:inline"
                      onClick={() => setShowLogin(true)}
                    >
                      Sign in
                    </a>
                  </li>
                ) : (
                  <div
                    className="relative  "
                    onMouseEnter={() => setIsDropdownVisible(true)}
                    onMouseLeave={() => setIsDropdownVisible(false)}
                  >
                    <Avatar
                      size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 50,
                        xl: 40,
                      }}
                      src={assets.profile_icon}
                    />
                    {isDropdownVisible && (
                      <ul className="absolute right-0 mt-2  flex flex-col gap-[10px] bg-[#fff2ef] py-2 px-4 border border-gray-300 shadow-lg rounded-md list-none ">
                        <li className="flex items-center   cursor-pointer hover:text-[#FF4C24]">
                          <img
                            src={assets.bag_icon}
                            className="mr-4 w-[20px]"
                            alt=""
                          />
                          Orders
                        </li>
                        <hr />
                        <li
                          className="flex items-center mr-4 pr-4 cursor-pointer hover:text-[#FF4C24]"
                          onClick={logout}
                        >
                          <img
                            src={assets.logout_icon}
                            className="mr-4 w-[20px]"
                            alt=""
                          />
                          Logout
                        </li>
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
