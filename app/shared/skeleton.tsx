import React from "react";

type Props = {
  className?: string;
};

export default function Skeleton({ className }: Props) {
  return (
    <div className={`bg-gray-200 shadow-l rounded-2xl ${className}`}></div>
  );
}
