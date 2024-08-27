import React from "react";

const About = () => {
  return (
    <section className="ezy__about gray py-20 ml-[-180px] md:py-28 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative ">
      <div className="container  px-6 ">
        <div className="grid grid-cols-12 gap-5 justify-center items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="lg:px-8 mx-[80px] pl-[150px] ">
              <h1 className="uppercase text-3xl lg:text-4xl md:text-6xl leading-tight font-medium mb-2">
                ABOUT US
              </h1>
              <hr className="w-24 h-1 bg-black dark:bg-white opacity-100 my-6" />
              <p className="text-md lg:text-lg text-wrap leading-normal opacity-75 my-2">
                Completely network collaborative web services via user-centric
                initiatives. Quickly promote sticky testing procedures before
                unique process improvements. Distinctively engineer innovative
                information whereas revolutionary process improvements. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quia enim
                omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam
                sapiente dignissimos voluptatum totam. Ratione atque dolorum
                nostrum a est voluptatibus.
              </p>
              <p className="text-lg leading-normal opacity-75">
                Distinctively engineer innovative information whereas
                revolutionary process improvements. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Quia enim omnis saepe dolor
                voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos
                voluptatum totam.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="w-[36vw] absolute top-0 right-0 bottom-0 float-left bg-[#EC1D23] bg-opacity-80" />
            <div className="relative flex justify-center lg:flex-col pl-[160px] lg:pl-20">
              <img
                src="https://www.miops.com/cdn/shop/articles/Food_Photography___How_to_Take_Unique_and_Creative_Food_Photos_5_1280x1100_crop_center.jpg?v=1661150733"
                alt=""
                className="rotate-45 w-60 h-60 lg:w-96 lg:h-96 object-cover mt-16"
              />
              <img
                src="https://cdn.prod.website-files.com/5e86c7170f1ab21474c3f2a4/5ef1cecb899ee03d62c90355_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpeg"
                alt=""
                className="hidden md:block rotate-45 w-60 h-60 lg:w-96 lg:h-96 object-cover mt-16 lg:-mt-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
