import { useCart } from "@/app/hooks/use-cart";
import Price from "@/app/shared/price";
import { clearCart, useAppDispatch } from "@/app/store/main";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default function CartItems() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { products } = useCart();

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Your cart cleared");
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="absolute top-[160%] right-0 bg-black p-4 w-[250px] rounded-xl z-50 flex flex-col divide-y divide-amber-100">
      {products.length === 0 ? (
        "Your cart is empty!"
      ) : (
        <>
          {products.map((product, key) => (
            <div key={key} className="py-4 first:pt-0">
              <div className="flex items-center gap-x-2">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={60}
                  height={60}
                />
                <h4 className="text-[16px]">{product.title}</h4>
              </div>
              <Price price={product.price} className="float-right" />
            </div>
          ))}
          <div className="flex flex-row gap-4 mt-4">
            <button
              onClick={handleClearCart}
              className="border w-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
            >
              Clear cart
            </button>
            <button
              onClick={handleCheckout}
              className="border w-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
