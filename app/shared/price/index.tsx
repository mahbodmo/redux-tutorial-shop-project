import React from "react";

type Props = {
  price: number | string;
  className?: string;
};

export default function Price({ price, className }: Props) {
  return (
    <p className={`text-[16px] font-bold ${className}`}>
      {price} <span className="text-[12px] font-normal">$</span>
    </p>
  );
}
