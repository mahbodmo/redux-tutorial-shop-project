import { ProductType } from "@/app/types/product";
import ProductCard from "../products/components/product-card";
import { notFound } from "next/navigation";

export default async function ProductsSSRPage() {
  try {
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );

    const products: ProductType[] = response?.products ?? [];

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
  } catch (e) {
    return notFound();
  }
}
