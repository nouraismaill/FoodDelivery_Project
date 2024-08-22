import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`);
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const updateStatus = async (event, orderId) => {
    const response = await axios.post(`${url}/api/order/status`, {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchOrders();
    }
  };
  return (
    <div className="m-[60px]">
      <h1 className="font-bold">Order Page</h1>
      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-5  items-start gap-[30px] border border-solid border-red-500 p-[20px] my-[30px] mx-[0px] lg:text-[14px] text-[#505050] sm:text-[12px] sm:grid-cols-3 sm:py-[15px] sm:px-[8px] "
          >
            <img
              src={assets.parcel_icon}
              className="lg:mx-[10px] sm:w-[40px] lg:w-[60px]"
              alt=""
            />
            <div>
              <p className="font-semibold">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="mt-[30px] mb-[5px]">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="mb-[10px]">
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    "," +
                    order.address.state +
                    "," +
                    order.address.country +
                    "," +
                    order.address.zip}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items:{order.items.length}</p>
            <p>${order.amount}</p>
            <select
              onChange={() => updateStatus(event, order._id)}
              value={order.status}
              className="bg-[#ffe8e4]  border border-solid border-red-500 lg:max-w-max lg:p-[10px] outline-none sm:p-[5px] sm:text-[12px] "
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
