import React from "react";
import MenuItems from "./components/menu-items";
import Cart from "./components/cart";

export default function MainHeader() {
  return (
    <div className="bg-black py-4 text-white">
      <div className="container mx-auto flex justify-between">
        <MenuItems />
        <Cart />
      </div>
    </div>
  );
}
