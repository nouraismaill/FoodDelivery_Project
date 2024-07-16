import React from "react";
import image from "../../assets/header_img.png"; // Ensure the path is correct
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div
          className=" lg:w-[90%] md:w-[87%] sm:w-full bg-cover bg-center lg:mx-[73px] md:mx-[70px] rounded-3xl "
          style={{
            height: "32rem",
            backgroundImage: `url(${image})`,
          }}
        >
          <div className=" head flex flex-col items-center px-10 pt-[190px] h-full w-full text-start bg-gray-900 bg-opacity-30 rounded-3xl ">
            <div className="pl-20 pb-10 animate-fadeIn my-[-80px] md:my-[-18px] lg:my-[6px]">
              <div className="pb-7 mt-[-30px] sm:t[-90px]">
                <h1 className="text-white  font-bold lg:text-5xl sm:text-2xl mr-60 md:text-3xl">
                  Order your
                  <div className="mt-2">favourite food here</div>
                </h1>
                <p className="text-white mt-3 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  eaque quaerat accusantium nihil consequuntur cum aut fugiat
                  neque iusto nesciunt. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.et.
                </p>
              </div>
              <button class="w-[150px] bg-red-500 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#5a0202] before:to-[rgb(82,11,11)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
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
