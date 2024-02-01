import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Details from "./pages/Details";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home setCart={setCart} />} />
        <Route path="/details/:id" element={<Details setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>

    </>
  );
}
