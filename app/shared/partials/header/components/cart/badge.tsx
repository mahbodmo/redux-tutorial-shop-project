import React from "react";

type Props = {
  productCount: number;
};

export default function ProductCountBadge({ productCount }: Props) {
  if (productCount === 0) return;

  return (
    <div className="absolute top-[-8] right-[-8] bg-red-800 px-[6px] rounded-full text-[12px]">
      {productCount}
    </div>
  );
}
