import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

import { MyComponent } from "../../components/app";
import Header from "../../components/Header/Header";
import "./Home.css";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <div>
          <div className="text-center font-bold text-3xl pb-4">
            <h1>For Better Experience Download</h1>
          </div>
          <div className="text-center font-bold text-3xl">
            <h1>Tomato App</h1>
          </div>
        </div>

        <MyComponent />
      </div>
    </>
  );
};

export default Home;
