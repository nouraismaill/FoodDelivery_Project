import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { Contact } from "./pages/contact";
import Menu from "./pages/menu";
import Mobile from "./pages/mobile";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="sticky top-0 z-50 shadow-md shadow-gray">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/mobile" element={<Mobile />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
