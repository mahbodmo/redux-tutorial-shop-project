import { useSelector } from "react-redux";
import { RootState } from "../store/main";

export const useCart = () => {
  const cart = useSelector((store: RootState) => store.cart);

  const totalPrice = cart.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return {
    cart,
    totalPrice,
  };
};
