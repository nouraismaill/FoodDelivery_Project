import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const Myorders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/userorders`,
      {},
      {
        headers: { token },
      }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <div className="my-[50px] mx-[80px]">
      <h2 className="font-bold text-[20px]">My Orders</h2>
      <div className="flex flex-col gap-[20px] mt-[30px] ">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="grid lg:grid-cols-6 items-center gap-[50px] text-[15px]  py-[10px] px-[20px] text-[#454545] border border-x-7 border-solid  border-red-600 md:grid-cols-3 sm:grid-cols-3 sm:pl-[18px]  sm:gap-y-1.25 sm:text-[12px]"
            >
              <img
                src={assets.parcel_icon}
                className="w-[50px] lg:mx-[30px] sm:mx-[2px] "
                alt=""
              />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items:{order.items.length}</p>
              <p>
                <span className="text-red-600">&#x25cf;</span>
                <b className="font-bold text-[#454545]">{order.status}</b>
              </p>
              <button
                onClick={fetchOrders}
                className="border-none py-[12px] px-[0px] border-r-2 bg-[#ffe1e1] cursor-pointer text-[#454545] lg:text-[15px] sm:text-[10px]"
              >
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myorders;
