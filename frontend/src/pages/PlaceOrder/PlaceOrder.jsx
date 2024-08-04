import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <form className="px-20  mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5">
      <div className="flex-col-reverse sm:flex-row sm:justify-between gap-12 ">
        <div className="grid gap-6" id="form">
          <p className="font-bold text-[30px] mb-[20px]">
            Delivery Information
          </p>
          <div className="w-full flex gap-3">
            <input
              className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#FF4C24] placeholder:text-black"
              type="text"
              placeholder="First Name"
              id="First-Name"
              name="First-Name"
              required=""
            />
            <input
              className="p-3 capitalize shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#FF4C24]"
              type="text"
              placeholder="Last Name"
              id="Last-Name"
              name="Last-Name"
            />
          </div>
          <div className="grid gap-6 w-full">
            <input
              className="p-3 shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid border-[#FF4C24] focus:border-[1px]"
              type="Email"
              placeholder="Email"
              id="Email"
              name="email"
            />
            <input
              className="p-3 shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid border-[#FF4C24] focus:border-[1px]"
              type="text"
              required=""
              placeholder="Street"
            />
          </div>
          <div className="flex gap-3">
            <input
              className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#FF4C24]"
              type="text"
              placeholder="City"
              id="city"
              name="city"
              required=""
            />
            <input
              className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#FF4C24]"
              type="text"
              placeholder="State"
              required=""
            />
          </div>
          <div className="flex gap-3">
            <input
              className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#FF4C24]"
              type="text"
              placeholder="Zip code"
              id="code"
              name="code"
              required=""
            />
            <input
              className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#FF4C24]"
              type="text"
              placeholder="Country"
              required=""
            />
          </div>
          <div className="grid gap-6 w-full">
            <input
              className="p-3 shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid border-[#FF4C24] focus:border-[1px]"
              type="phone"
              placeholder="Phone"
              id="Phone"
              name="Phone"
            />
          </div>
        </div>
      </div>

      <div className="lg:order-2 order-1 sm:order-2 flex flex-col gap-5 mb-20">
        <h2 className="font-bold text-lg">Cart Totals</h2>
        <div className="my-[-30px]">
          <div className="cart-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="my-2 mx-0" />
          <div className="cart-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="my-2 mx-0" />
          <div className="cart-details">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
          <button className="comic-button mt-3">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
