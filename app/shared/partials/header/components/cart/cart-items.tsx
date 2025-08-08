import { useCart } from "@/app/hooks/use-cart";
import { clearCart, useAppDispatch } from "@/app/store/main";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function CartItems() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { products } = useCart();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className='absolute top-[160%] right-0 bg-black p-4 w-[250px] rounded-xl z-50 flex flex-col divide-y divide-amber-100'>
      {products.map((product, key) => (
        <div key={key} className='py-4 first:pt-0'>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={100}
            height={100}
          />
          <div>
            <h4>{product.title}</h4>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
      {products.length > 0 && (
        <div className='flex flex-row gap-4 mt-4'>
          <button
            onClick={handleClearCart}
            className='border w-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300'
          >
            Clear cart
          </button>
          <button
            onClick={handleCheckout}
            className='border w-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300'
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
