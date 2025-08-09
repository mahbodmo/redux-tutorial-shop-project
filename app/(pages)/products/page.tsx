import { ProductType } from "@/app/types/product";
import ProductCard from "../products/components/product-card";
import { notFound } from "next/navigation";
import FilterButton from "./components/filters/filter-button";
import SortButton from "./components/sort/sort-button";

export default async function ProductsPage() {
  try {
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );

    const products: ProductType[] = response?.products ?? [];

    return (
      <>
        <div className="flex items-center justify-between">
          <h1 className="text-[36px] font-bold mb-6">Products</h1>

          <div className="flex items-baseline gap-x-2">
            <SortButton />
            <FilterButton />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {products?.map((product: ProductType) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </>
    );
  } catch (e) {
    console.log(e);
    return notFound();
  }
}
