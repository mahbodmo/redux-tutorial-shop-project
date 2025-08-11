import React from "react";

type Props = {
  price: number;
  className?: string;
};

export default function Price({ price, className }: Props) {
  return (
    <p className={`text-[16px] font-bold ${className}`}>
      {price.toFixed(2)} <span className="text-[12px] font-normal">$</span>
    </p>
  );
}
