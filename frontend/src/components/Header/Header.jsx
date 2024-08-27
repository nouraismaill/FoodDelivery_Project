import React from "react";
import image from "../../assets/header_img.png"; // Ensure the path is correct
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="">
        <div
          className="  lg:w-[90%] md:w-[87%]  sm:w-full bg-cover bg-center lg:mx-[67px] md:mx-[59px] lg:rounded-2xl md:rounded-2xl rounded-none leading-[24px] "
          style={{
            height: "30.8rem",
            backgroundImage: `url(${image})`,
          }}
        >
          <div className=" text-[#f3f4f6] rounded-none head flex flex-col items-center px-10 pt-[190px]   h-full w-full text-start bg-gray-800  bg-opacity-30 md:rounded-2xl lg:rounded-2xl ">
            <div className="pl-20 pb-8 animate-fadeIn my-[-40px] md:my-[-18px] lg:my-[-15px]">
              <div className="py-[40px] text-left mt-[-30px] leading-[24px] lg:pb-[28px]   ">
                <h1 className=" font-bold lg:text-5xl text-3xl mr-60">
                  Order your
                  <div className="mt-2 text-nowrap">favourite food here</div>
                </h1>
                <p className="text-white mt-3 text-base  pr-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  eaque quaerat accusantium nihil consequuntur cum aut fugiat
                  neque iusto nesciunt. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.et.
                </p>
              </div>
              <button class="w-[150px] bg-red-500 h-[50px] my-[-10px] lg:my-[-4px] flex items-center justify-center rounded-xl cursor-pointer  overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#5a0202] before:to-[rgb(82,11,11)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                VIEW MENU
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
