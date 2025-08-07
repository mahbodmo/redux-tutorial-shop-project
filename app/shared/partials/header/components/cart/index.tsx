"use client";

import Button from "@/app/shared/button";
import { ShoppingCartIcon } from "lucide-react";
import React, { useState } from "react";
import CartItems from "./cart-items";

export default function Cart() {
  const [dropDown, setDropDown] = useState<boolean>(false);

  return (
    <div className="relative">
      <Button onClick={() => setDropDown(!dropDown)}>
        <ShoppingCartIcon color="white" size={24} />
      </Button>

      {dropDown && <CartItems />}
    </div>
  );
}
