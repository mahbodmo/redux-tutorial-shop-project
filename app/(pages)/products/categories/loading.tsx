import Skeleton from "@/app/shared/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col gap-y-6">
      <Skeleton className="w-[180px] h-[24px]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton className="min-h-[90px]" key={index} />
        ))}
      </div>
    </div>
  );
}
