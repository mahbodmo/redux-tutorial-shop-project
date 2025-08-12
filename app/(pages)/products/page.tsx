import { ProductType } from "@/app/types/product";
import { notFound } from "next/navigation";
import FilterButton from "./components/filters/filter-button";
import SortButton from "./components/sort/sort-button";
import LoadMoreBtn from "./components/load-more";
import ProductCard from "@/app/shared/product-card";
import { urlWithQueryParams } from "@/app/lib/utils";
import { DEFAULT_PAGINATION_LIMIT } from "@/app/const";

type Params = {
  searchParams: Promise<{
    productName?: string;
    category?: string;
    maxPrice?: string;
    minPrice?: string;
    limit?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: Params) {
  const { limit = DEFAULT_PAGINATION_LIMIT } = await searchParams;

  try {
    const response = await fetch(
      urlWithQueryParams("https://dummyjson.com/products", {
        limit: limit ?? DEFAULT_PAGINATION_LIMIT,
      })
    ).then((res) => res.json());

    const products: ProductType[] = response?.products ?? [];

    return (
      <>
        <div className='flex items-center justify-between'>
          <h1 className='text-[36px] font-bold mb-6'>Products</h1>
          <div className='flex items-baseline gap-x-2'>
            <SortButton />
            <FilterButton />
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {products?.slice(0, +limit)?.map((product: ProductType) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <LoadMoreBtn limit={+limit} hasNewPage={response.total > limit} />
      </>
    );
  } catch (e) {
    console.log(e);
    return notFound();
  }
}
