import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="h-screen  w-screen mt-20 fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-170 w-35 mb-10 justify-center mt-[-25px]">
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
        <div
          id="form-container"
          className="bg-white place-self-center bg-opacity-90 p-8 sm:p-16 rounded-lg shadow-2xl w-full max-w-md relative z-10 transform transition duration-500 ease-in-out flex  flex-col py-[25px] px-[30px] max-w-23vm text-[14px] gap-[25px] "
        >
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="mb-4 ml-auto cursor-pointer w-[16px]"
          />
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            {currState}
          </h2>

          <form className="space-y-5">
            {currState === "Login" ? null : (
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Your name"
                id="name"
                name="name"
                type="text"
                required
              />
            )}
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Email"
              id="email"
              name="email"
              type="text"
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
            />
            <button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {currState === "Sign Up" ? "Create Account" : "Login"}
            </button>
            {currState === "Login" ? (
              <p className="text-blue-500  text-sm">
                Don't have an account?{" "}
                <span
                  onClick={() => setCurrState("Sign Up")}
                  className="cursor-pointer hover:text-blue-800"
                >
                  Click Here
                </span>
              </p>
            ) : (
              <p className="text-blue-500 hover:text-blue-800 text-sm">
                Already have an account?{" "}
                <span
                  onClick={() => setCurrState("Login")}
                  className="cursor-pointer"
                >
                  Login here
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
