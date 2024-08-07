import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <>
      <div class="mt-4 flex flex-col mx-16 rounded-lg p-4  gap-[30px]">
        <div class="mt-3 ">
          <p>Upload Image</p>
          <label class="text-black" htmlFor="image">
            <img src={assets.upload_area} className="mt-3" alt="" />
          </label>
          <input id="image" hidden required type="file" />
        </div>
        <div class="">
          <label class="text-black" for="name">
            Product name
          </label>
          <input
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
            placeholder="Write content here"
            required
            class="w-full mt-2 bg-white rounded-md border  border-gray-300 text-black px-2 py-1"
            name="desc"
            rows={6}
          ></textarea>
        </div>

        <div class="mt-4   gap-4 flex flex-row space-x-2">
          <div class="flex-1 w-2 ">
            <label class="text-black" for="category">
              Product category
            </label>
            <select
              class="w-full bg-white  border rounded-md border-gray-300 text-black mt-2 px-0 py-1"
              name="category"
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
          <div class="flex-1 w-2 ">
            <label class="text-black" for="price">
              Product price
            </label>
            <input
              class="w-full mt-2 bg-white rounded-md border-gray-300 border  text-black px-2 py-1"
              name="price"
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
      </div>
    </>
  );
};

export default Add;
