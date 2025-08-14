import Skeleton from "@/app/shared/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col gap-y-6">
      <Skeleton className="w-full md:w-[400px] h-[24px]" />
      <div className="flex flex-col gap-4 md:flex-row items-start relative">
        <Skeleton className="w-[100px] h-[100px]" />
        <div className="flex flex-col gap-y-4">
          <Skeleton className="w-[200px] h-[30px]" />
          <Skeleton className="w-[120px] h-[40px] !rounded-full" />
        </div>
      </div>
      <Skeleton className="w-full h-[20px]" />
      <Skeleton className="w-[250px] h-[20px]" />
    </div>
  );
}
