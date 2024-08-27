import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer/footer";
import Login from "../components/login";
import Navbar from "../components/navbar";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import { Contact } from "../pages/contact";
import Menu from "../pages/menu";
import Verify from "../pages/verify";

import Myorders from "../pages/Myorders";
import About from "../pages/about";
import ScrollToTop from "./ScrollToTop";
const Layout = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50">
        {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      </div>

      <div className="sticky  top-0 z-50 shadow-md shadow-gray">
        <Navbar setShowLogin={setShowLogin} />
      </div>
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<Myorders />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
