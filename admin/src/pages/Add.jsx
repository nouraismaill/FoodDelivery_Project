import axios from "axios";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <>
      <form
        class="mt-4 flex flex-col lg:mx-16 md:mx-16 sm:mx-18 rounded-lg p-4  gap-[30px] "
        onSubmit={onSubmitHandler}
      >
        <div class="mt-3 ">
          <p>Upload Image</p>
          <label class="text-black" htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="mt-3 w-6/12"
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            hidden
            required
            type="file"
          />
        </div>
        <div class="">
          <label class="text-black" for="name">
            Product name
          </label>
          <input
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
            placeholder="Type here"
            class="w-full mt-2 bg-white border border-gray-300 rounded-md  text-black px-2 py-1"
            name="name"
            type="text"
          />
        </div>
        <div class="mt-4 mr-1">
          <label class="text-black" for="description">
            Product Description
          </label>
          <textarea
            onChange={(e) => setData({ ...data, description: e.target.value })}
            value={data.description}
            placeholder="Write content here"
            required
            class="w-full mt-2 bg-white rounded-md border  border-gray-300 text-black px-2 py-1"
            name="description"
            rows={6}
          ></textarea>
        </div>

        <div class="mt-4   gap-4 flex flex-row space-x-2">
          <div class="flex-1 w-2 ">
            <label class="text-black text-nowrap" for="category">
              Product category
            </label>
            <select
              class="w-full bg-white  border rounded-md border-gray-300 text-black mt-2 px-0 py-1"
              name="category"
              onChange={(e) => setData({ ...data, category: e.target.value })}
              value={data.category}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div class="flex-1 w-2  ">
            <label class="text-black  text-nowrap" for="price">
              Product price
            </label>
            <input
              class="w-full mt-2  bg-white rounded-md border-gray-300 border  text-black px-2 py-1"
              name="price"
              onChange={(e) => setData({ ...data, price: e.target.value })}
              value={data.price}
              type="number"
              placeholder="$20"
            />
          </div>
        </div>

        <div class=" mt-0 flex justify-start ">
          <button
            class="bg-black  text-white rounded-md px-[40px] py-[10px] border-none max-w-[120px]"
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
    </>
  );
};

export default Add;
