import { X } from "lucide-react";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-full w-full bg-black/40 z-110"
        onClick={onClose}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-120 bg-white rounded-xl px-4 pt-14 pb-4 w-[500px]">
        <X
          size={20}
          color="black"
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        />
        {children}
      </div>
    </>
  );
}
