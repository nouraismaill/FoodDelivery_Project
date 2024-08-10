import axios from "axios";
import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const Login = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (event) => {
    event.preventDefault();
    let newURL = url;
    if (currState === "Login") {
      newURL += "/api/user/login";
    } else {
      newURL += "/api/user/register";
    }
    try {
      const response = await axios.post(newURL, data);
      console.log("Response data:", response.data); // Add this line
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Login/Register error:", error.response.data);
      alert(
        "An error occurred: " + (error.response.data.message || "Unknown error")
      );
    }
  };
  return (
    <div className="h-screen  w-screen mt-20 fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
      <form
        className="relative h-170 w-35 mb-10 justify-center mt-[-25px]"
        onSubmit={onLogin}
      >
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

          <div className="space-y-5">
            {currState === "Login" ? null : (
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Your name"
                id="name"
                onChange={onChangeHandler}
                name="name"
                value={data.name}
                type="text"
                required
              />
            )}
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Email"
              id="email"
              onChange={onChangeHandler}
              name="email"
              value={data.email}
              type="text"
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Password"
              id="password"
              onChange={onChangeHandler}
              value={data.password}
              name="password"
              type="password"
            />
            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
