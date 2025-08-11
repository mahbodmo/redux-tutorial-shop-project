import { useSelector } from "react-redux";
import { RootState } from "../store/main";

export const useFavorites = () => {
  const favorites = useSelector(
    (store: RootState) => store.favorites.favoriteItems
  );

  return { favorites };
};
