import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function FilterRow({ title, children }: Props) {
  const [openDown, setOpenDown] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex items-center justify-between cursor-pointer mb-2"
        onClick={() => setOpenDown(!openDown)}
      >
        <span className="text-[16px] font-bold">{title}</span>{" "}
        {openDown ? <ChevronDown /> : <ChevronRight />}
      </div>

      {openDown && <div>{children}</div>}
    </>
  );
}
