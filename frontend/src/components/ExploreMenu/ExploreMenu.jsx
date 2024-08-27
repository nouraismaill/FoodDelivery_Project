import React from "react";
import { menu_list } from "../../assets/assets";
import "./Explore.css";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu mx-20 mt-6" id="explore-menu">
      <h1 className="font-bold text-3xl py-[4px] px-[3px] text-[#020617]">
        Explore our menu
      </h1>
      <p className="explore-menu-text text-[#64748b] my-[6px] mx-[6px text-nowrap">
        Choose from a diverse menu featuring a dlectable array
      </p>
      <div className="explore-menu-list my-[11px] mx-[0px] text-[#64748b]">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((preview) =>
                  preview === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category == item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
