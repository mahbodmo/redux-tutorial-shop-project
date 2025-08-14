import Skeleton from "@/app/shared/skeleton";
import React from "react";

export default function ProductsSSRLoading() {
  return (
    <div>
      <h1 className="text-[36px] font-bold mb-6">Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton className="h-[400px]" key={index} />
        ))}
      </div>
    </div>
  );
}
