import React from "react";

export default function ProductsSSRLoading() {
  return (
    <div>
      <h1 className="text-[36px] font-bold mb-6">Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-l rounded-2xl p-4 h-[300px]"
          ></div>
        ))}
      </div>
    </div>
  );
}
