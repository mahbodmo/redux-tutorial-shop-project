import { ProductType } from "@/app/types/product";
import { notFound } from "next/navigation";
import FilterButton from "./components/filters/filter-button";
import SortButton from "./components/sort/sort-button";
import LoadMoreBtn from "./components/load-more";
import ProductCard from "@/app/shared/product-card";

export default async function ProductsPage() {
  try {
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );

    const products: ProductType[] = response?.products ?? [];

    let perPage = 8;

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
          {products?.slice(0, perPage)?.map((product: ProductType) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <LoadMoreBtn />
      </>
    );
  } catch (e) {
    console.log(e);
    return notFound();
  }
}
