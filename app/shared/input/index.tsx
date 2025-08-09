import React from "react";

type Props = {
  type?: "text" | "number";
  placeHolder?: string;
  defaultValue?: string;
  value?: string;
  autoFocus?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  afterNode?: React.ReactNode;
};

export default function Input({
  type = "text",
  placeHolder,
  defaultValue,
  value,
  autoFocus = false,
  className,
  onChange,
  afterNode,
}: Props) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeHolder}
        defaultValue={defaultValue}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
        className={`${className} focus:outline-none border-b-[1px] focus:border-b-2 border-black w-full px-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
      />

      <div className="absolute right-0 top-0 text-gray-600">{afterNode}</div>
    </div>
  );
}
