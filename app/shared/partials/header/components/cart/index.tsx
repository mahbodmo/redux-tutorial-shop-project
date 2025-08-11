"use client";

import Button from "@/app/shared/button";
import { ShoppingCartIcon } from "lucide-react";
import React, { useState } from "react";
import CartItems from "./cart-items";
import { useCart } from "@/app/hooks/use-cart";
import ProductCountBadge from "./badge";

export default function Cart() {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const {
    cart: { items },
  } = useCart();

  return (
    <div className="relative">
      <Button onClick={() => setDropDown(!dropDown)}>
        <ShoppingCartIcon color="white" size={24} />
        <ProductCountBadge productCount={items.length} />
      </Button>

      {dropDown && <CartItems onCheckout={() => setDropDown(false)} />}
    </div>
  );
}
