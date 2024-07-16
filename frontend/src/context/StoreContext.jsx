// context/StoreContext.jsx
import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCardItems] = useState({});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCardItems((prev)=>({ ...prev, [itemId]: 1 }));
    } else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const contextValue = {
    food_list,
    cartItems,
    setCardItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
