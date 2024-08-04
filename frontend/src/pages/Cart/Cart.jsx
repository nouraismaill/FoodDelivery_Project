import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart mb-20 ">
      <div className="cart-items mx-4">
        <div className="cart-title ml-[50px]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-1 bg-gray-200 border-none" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-title my-2 mr-[6px] text-black text-sm gap-4">
                  <img className="w-1/2 mx-2" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className="h-1 bg-gray-200 border-none" />
              </div>
            );
          }
        })}
      </div>

      <div className="mx-10 mt-20 flex flex-col-reverse sm:flex-row sm:justify-between gap-12">
        <div className="flex-1 order-1 sm:order-2 flex flex-col gap-5">
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
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>

            <button
              onClick={() => navigate("/order")}
              className="comic-button mt-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
        <div className="flex-1 order-2 sm:order-1">
          <div>
            <p className="text-gray-700">
              If you have a promo code, enter it here
            </p>

            <div className="flex mt-2 justify-between items-center bg-gray-100">
              <input
                placeholder="Promo code"
                className="bg-transparent border-none outline-none pl-2"
                type="text"
              />
              <button className="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
