import React from "react";

type Props = {
  category: string;
};

export default function CategoryBadge({ category }: Props) {
  return (
    <div className="bg-red-200 w-fit h-fit p-2 rounded-full text-red-900">
      {category}
    </div>
  );
}
