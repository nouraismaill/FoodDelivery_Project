import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../Fooditem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!Array.isArray(food_list)) {
    console.error("food_list is not an array:", food_list);
    return <div>Loading...</div>; // Fallback rendering
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
