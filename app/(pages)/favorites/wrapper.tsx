"use client";

import { useFavorites } from "@/app/hooks/use-favorites";
import Button from "@/app/shared/button";
import ProductCard from "@/app/shared/product-card";
import { useRouter } from "next/navigation";
import React from "react";

export default function Wrapper() {
  const { favorites } = useFavorites();

  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {favorites?.map((item) => (
            <ProductCard product={item.product} key={item.product.id} />
          ))}
        </div>
      ) : (
        <>
          <p>No items found in your favorites list</p>
          <Button onClick={handleClick}>Add to your favorites</Button>
        </>
      )}
    </>
  );
}
