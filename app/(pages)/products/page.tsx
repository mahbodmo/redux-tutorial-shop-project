"use client";

import { ProductType } from "@/app/types/product";
import { useEffect, useState } from "react";
import ProductCard from "./components/product-card";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductType[]>();

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setProducts(result?.products);
      console.log(result?.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className='text-[36px] font-bold mb-6'>Products</h1>
      <div className='grid grid-cols-4 gap-4'>
        {products?.map((product: ProductType) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
