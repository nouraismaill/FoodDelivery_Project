import React from "react";

import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div class="relative w-18%   flex min-h-[100vh]  flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5 border-t-0 ">
      <nav class="flex flex-col gap-1 px-[-3px] lg:px-2 font-sans text-base font-normal text-blue-gray-700   sm:min-w-7 ">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive
              ? "bg-[#fff0ed] border-red-500 "
              : "flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          }
        >
          <div class="flex items-center w-full p-3  transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <div className="grid place-items-center ">
              <img src={assets.add_icon} alt="" className="max-w-max " />
            </div>

            <p className=" px-8 md:block lg:block hidden text-nowrap">
              Add Items
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive
              ? "bg-[#fff0ed] border-red-500 "
              : "flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          }
        >
          <div class="flex items-center w-full p-3 lg:p-4  transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <div className="grid place-items-center ">
              <img src={assets.order_icon} alt="" className="max-w-max " />
            </div>
            <p className=" px-8 md:block lg:block hidden text-nowrap">
              List Items
            </p>
          </div>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-[#fff0ed] border-red-500 "
              : "flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          }
        >
          <div class="flex items-center w-full p-3 lg:p-4  transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <div className="grid place-items-center ">
              <img src={assets.order_icon} alt="" className="max-w-max " />
            </div>
            <p className=" px-8 md:block lg:block hidden text-nowrap">Orders</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
