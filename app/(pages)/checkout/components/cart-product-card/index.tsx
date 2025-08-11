import Price from "@/app/shared/price";
import {
  addProduct,
  reduceProduct,
  removeProduct,
} from "@/app/store/cart-slice";
import { useAppDispatch } from "@/app/store/main";
import { ProductType } from "@/app/types/product";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

type Props = {
  item: {
    product: ProductType;
    quantity: number;
  };
};

export default function CartProductCard({ item }: Props) {
  const dispatch = useAppDispatch();

  const product = item.product;
  const productQuantity = item.quantity;

  const iconClss = `cursor-pointer`;

  const handleAddQuantity = () => {
    dispatch(addProduct(product));
    toast.success(`One ${product.title} added to your cart`);
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(product));
    toast.success(`${product.title} removed from your cart`);
  };

  const handleReduceQuantity = () => {
    dispatch(reduceProduct(product));
    toast.success(`One ${product.title} removed from your cart`);
  };

  return (
    <div className="bg-gray-100 p-4 w-full rounded-xl shadow-lg flex items-start justify-between select-none relative">
      <div className="flex items-center gap-x-2">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={80}
          height={80}
        />
        <h4 className="text-[18px] font-bold">{product.title}</h4>
      </div>

      <div>
        <div className="flex items-center gap-x-2">
          {productQuantity > 1 ? (
            <Minus
              size={18}
              className={iconClss}
              onClick={handleReduceQuantity}
            />
          ) : (
            <Trash
              size={16}
              className={iconClss}
              onClick={handleRemoveProduct}
            />
          )}
          {productQuantity}
          <Plus size={18} className={iconClss} onClick={handleAddQuantity} />
        </div>
        <Price
          price={product.price * productQuantity}
          className="absolute right-4 bottom-2"
        />
      </div>
    </div>
  );
}
