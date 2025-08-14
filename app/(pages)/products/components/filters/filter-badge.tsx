import React from "react";

type Props = {
  count?: number;
};

export default function FilterBadge({ count }: Props) {
  return (
    count !== 0 && (
      <div className="absolute -right-2 -top-2 rounded-full bg-red-800 text-white text-sm w-[25px] h-[25px] flex items-center justify-center">
        {count}
      </div>
    )
  );
}
