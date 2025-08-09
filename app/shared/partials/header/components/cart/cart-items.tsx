import { useCart } from "@/app/hooks/use-cart";
import Button from "@/app/shared/button";
import Price from "@/app/shared/price";
import { clearCart, removeProduct, useAppDispatch } from "@/app/store/main";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default function CartItems() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const {
    cart: { items },
    totalPrice,
  } = useCart();

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Your cart cleared");
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className='absolute top-[160%] right-0 bg-black p-4 w-[250px] rounded-xl z-50 flex flex-col'>
      {items.length === 0 ? (
        "Your cart is empty!"
      ) : (
        <div className='flex flex-col gap-y-2'>
          {items.map((item, key) => (
            <div
              key={key}
              className='flex flex-col gap-y-2 border border-white p-4 rounded-lg'
            >
              <div className='flex items-center gap-x-2'>
                <Image
                  src={item.product.thumbnail}
                  alt={item.product.title}
                  width={60}
                  height={60}
                />
                <h4 className='text-[16px]'>{item.product.title}</h4>
              </div>
              <div className='flex items-center gap-x-2 justify-between'>
                <div>
                  <strong>Quantity:</strong> {item.quantity}
                </div>
                <div>
                  <Button onClick={() => dispatch(removeProduct(item.product))}>
                    Remove
                  </Button>
                </div>
              </div>
              <Price
                price={item.product.price * item.quantity}
                className='float-right'
              />
            </div>
          ))}
          <div className='flex flex-row gap-4'>
            <strong>Total Price:</strong>{" "}
            <Price price={totalPrice.toFixed(2)} />
          </div>
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
        </div>
      )}
    </div>
  );
}
