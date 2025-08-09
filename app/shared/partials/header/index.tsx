import React from "react";
import MenuItems from "./components/menu-items";
import Cart from "./components/cart";

export default function MainHeader() {
  return (
    <div className="bg-black py-4 text-white fixed top-0 left-0 w-full z-100">
      <div className="container mx-auto flex justify-between">
        <MenuItems />
        <Cart />
      </div>
    </div>
  );
}
