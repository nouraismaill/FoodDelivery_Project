import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./item.css";
const FoodItem = ({ id, name, price, description, image }) => {
  // const [itemCount, ad] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item ">
      <div className="relative ">
        <img className=" image rounded-lg" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute cursor-pointer rounded-sm right-[15px] bottom-2"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className=" absolute cursor-pointer rounded-full right-[15px] bottom-2 flex p-[6px] gap-[10px]  items-center bg-white">
            <img
              className="w-6"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-6"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-[20px] ">
        <div className="flex justify-between mb-[10px] items-center">
          <p className="text-1xl font-extrabold">{name}</p>
          <img src={assets.rating_starts} className="w-[70px]" alt="" />
        </div>
        <p className="text-[#676767] text-sm">{description}</p>
        <p className="text-red-500 text-lg font-semibold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
