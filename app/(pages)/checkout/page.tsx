"use client";

import { useCart } from "@/app/hooks/use-cart";
import React from "react";
import CartProductList from "./components/cart-product-list";
import Price from "@/app/shared/price";
import Button from "@/app/shared/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { clearCart } from "@/app/store/cart-slice";
import { useAppDispatch } from "@/app/store/main";

export default function CheckoutPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    cart: { items },
    totalPrice,
  } = useCart();

  const handlePayment = () => {
    dispatch(clearCart());
    toast.success("Your payment was successful");
    router.push("/products");
  };

  return (
    <div className="flex flex-col gap-y-8">
      <CartProductList items={items} />

      <div className="flex items-center justify-end gap-x-6">
        <Price price={totalPrice} />

        <Button
          onClick={handlePayment}
          className="border-2 border-black px-4 py-2 rounded-lg"
        >
          Pay
        </Button>
      </div>
    </div>
  );
}
