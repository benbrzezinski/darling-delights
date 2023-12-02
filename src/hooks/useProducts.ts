import { useSelector } from "react-redux";
import {
  selectProducts,
  selectBasket,
  selectFavourites,
  selectIsBasketInfoOpen,
  selectTotal,
  selectFilteredProducts,
} from "../redux/products/selectors";

const useProducts = () => {
  const products = useSelector(selectProducts);
  const basket = useSelector(selectBasket);
  const favourites = useSelector(selectFavourites);
  const isBasketInfoOpen = useSelector(selectIsBasketInfoOpen);
  const total = useSelector(selectTotal);
  const filteredProducts = useSelector(selectFilteredProducts);

  return {
    products,
    basket,
    favourites,
    isBasketInfoOpen,
    total,
    filteredProducts,
  };
};

export default useProducts;
