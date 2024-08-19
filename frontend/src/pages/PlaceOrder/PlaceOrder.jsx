import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });
  const onChaneHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    const response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Failed to place order");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      {
        navigate("/cart");
      }
    }
  }, [token]);
  return (
    <form
      className="px-20  mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5"
      onSubmit={placeOrder}
    >
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
              id="firstName"
              name="firstName"
              required
              onChange={onChaneHandler}
              value={data.firstName}
            />
            <input
              className="p-3 capitalize shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#FF4C24]"
              type="text"
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              required
              onChange={onChaneHandler}
              value={data.lastName}
            />
          </div>
          <div className="grid gap-6 w-full">
            <input
              className="p-3 shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid border-[#FF4C24] focus:border-[1px]"
              type="Email"
              placeholder="Email"
              id="Email"
              required
              name="email"
              onChange={onChaneHandler}
              value={data.email}
            />
            <input
              className="p-3 shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid border-[#FF4C24] focus:border-[1px]"
              type="text"
              required
              placeholder="Street"
              name="street"
              onChange={onChaneHandler}
              value={data.street}
            />
          </div>
          <div className="flex gap-3">
            <input
              className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#FF4C24]"
              type="text"
              placeholder="City"
              id="city"
              name="city"
              required
              onChange={onChaneHandler}
              value={data.city}
            />
            <input
              className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#FF4C24]"
              type="text"
              placeholder="State"
              required
              name="state"
              onChange={onChaneHandler}
              value={data.state}
            />
          </div>
          <div className="flex gap-3">
            <input
              className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#FF4C24]"
              type="text"
              placeholder="Zip code"
              id="code"
              name="zip"
              required
              onChange={onChaneHandler}
              value={data.zip}
            />
            <input
              className="p-3 glass shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#FF4C24]"
              type="text"
              placeholder="Country"
              name="country"
              required
              onChange={onChaneHandler}
              value={data.country}
            />
          </div>
          <div className="grid gap-6 w-full">
            <input
              className="p-3 shadow-2xl glass w-full placeholder:text-black outline-none focus:border-solid border-[#FF4C24] focus:border-[1px]"
              type="phone"
              placeholder="Phone"
              id="phone"
              name="phone"
              onChange={onChaneHandler}
              required
              value={data.phone}
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
          <button className="comic-button mt-3" type="submit">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
