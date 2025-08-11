import { CartItemType } from "@/app/types/cart";
import React from "react";
import CartProductCard from "../cart-product-card";
import Link from "next/link";

type Props = {
  items: CartItemType[];
};

export default function CartProductList({ items }: Props) {
  return (
    <div className="flex flex-col gap-y-4">
      {items.length === 0 ? (
        <>
          <p>No items found in your cart</p>
          <Link href={`/products`}>Go to Products</Link>
        </>
      ) : (
        items.map((item) => (
          <CartProductCard key={item.product.id} item={item} />
        ))
      )}
    </div>
  );
}
