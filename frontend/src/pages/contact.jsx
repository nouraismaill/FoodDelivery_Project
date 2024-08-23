import React from "react";

export const Contact = () => {
  return (
    <div>
      <main className="relative py-28 bg-[#FF6C5F] ">
        <div className="relative z-10 max-w-screen-xl mx-auto text-black sm:px-4 md:px-8">
          <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
            <p className=" uppercase text-[#FEFEFE] text-3xl font-semibold sm:text-4xl">
              Get in touch
            </p>
            <p className="text-[#FFFFFF]">
              We’d love to hear from you! Please fill out the form bellow.
            </p>
          </div>
          <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  id="email"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className=" mt-2">
                  <input
                    type="number"
                    placeholder="+1 (555) 000-000"
                    required
                    className="w-full pl-5 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    id="number"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  id="message"
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-[#fb5607] hover:bg-[#EC1D23]  rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
