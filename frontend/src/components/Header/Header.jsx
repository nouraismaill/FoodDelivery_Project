import React from "react";
import image from "../../assets/header_img.png"; // Ensure the path is correct
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div
          className="w-full bg-cover bg-center"
          style={{
            height: "32rem",
            backgroundImage: `url(${image})`,
          }}
        >
          <div className=" head flex flex-col items-center px-10 pt-[230px] h-full w-full text-start bg-gray-900 bg-opacity-30 ">
            <div className="pl-20 pb-10 animate-fadeIn">
              <div className="pb-7 mt-[-30px]">
                <h1 className="text-white  font-bold lg:text-5xl mr-60 md:text-3xl">
                  Order your
                  <div className="mt-5">favourite food here</div>
                </h1>
                <p className="text-white mt-4 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  eaque quaerat accusantium nihil consequuntur cum aut fugiat
                  neque iusto nesciunt. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.et.
                </p>
              </div>
              <button
                class="cursor-pointer animate-bounce px-10 pt-5 pb-5 rounded-full text-white text-xl 
 bg-gradient-to-r from-[#FF4C24] to-red-500 hover:border-cyan-500 hover:shadow-2xl "
              >
                View Menu
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
