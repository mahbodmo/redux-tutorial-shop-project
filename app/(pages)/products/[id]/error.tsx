"use client";

export default function ProductsErrorPage({}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>Product not found!</p>
    </div>
  );
}
