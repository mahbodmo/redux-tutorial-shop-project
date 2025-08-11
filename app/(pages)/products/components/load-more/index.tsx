"use client";

import Button from "@/app/shared/button";
import React from "react";

export default function LoadMoreBtn() {
  return (
    <div className="my-18 mx-auto w-fit">
      <Button
        onClick={() => {
          alert("pagination");
        }}
        className="bg-gray-200 shadow-lg rounded-full px-4 py-2 border-2 border-black"
      >
        Load more
      </Button>
    </div>
  );
}
