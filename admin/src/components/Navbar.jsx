import React from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  return (
    <>
      <nav className=" flex  w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-10 ">
          <div>
            <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
              <img
                className="me-2 "
                src={assets.logo}
                style={{ height: "60px" }}
                alt="Logo"
                loading="lazy"
              />
            </a>
          </div>
          <img src={assets.profile_image} className="w-[40px]" alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
