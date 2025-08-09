import React from "react";

export default function Loading() {
  return (
    <div className="flex items-start gap-x-4">
      <div className="bg-gray-200 shadow-l w-[200px] h-[170px] rounded-2xl"></div>

      <div className="flex flex-col gap-y-6 w-full">
        <h2 className="bg-gray-200 w-[400px] h-[40px] rounded-xl"></h2>

        <p className="bg-gray-200 w-[600px] h-[20px] rounded-xl"></p>
        <p className="bg-gray-200 w-[250px] h-[20px] rounded-xl"></p>
      </div>
    </div>
  );
}
