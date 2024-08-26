import { Fade } from "@mui/material";
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../Fooditem/FoodItem";
import "./food.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-[30px] m-[80px] text-[#171717]">
      <h2 className="text-3xl font-bold mt-[-17px] text-[#171717]">
        Top dishes near you
      </h2>
      <div className=" item grid lg:grid-cols-4 gap-7 my-6 mx-auto transition duration-3000 animate-fadeIn rounded-sm sm:grid-cols-1 md:grid-cols-3 md:gap-4">
        {food_list.map((item, index) => {
          if (category == "All" || category === item.category) {
            return (
              <Fade in={true} timeout={3000} key={index}>
                <div class="max-w-xs transition duration-300 ease-in-out hover:shadow-lg hover:rounded-2xl dark:hover:shadow-black/30">
                  <FoodItem
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                </div>
              </Fade>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
