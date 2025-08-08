import { useSelector } from "react-redux";
import { RootState } from "../store/main";

export const useCart = () => {
  const { cart } = useSelector((store: RootState) => store);

  return cart;
};
