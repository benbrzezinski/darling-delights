import { useSelector } from "react-redux";
import {
  selectProducts,
  selectBasket,
  selectIsBasketInfoOpen,
  selectFilteredProducts,
} from "../redux/products/selectors";

const useProducts = () => {
  const products = useSelector(selectProducts);
  const basket = useSelector(selectBasket);
  const isBasketInfoOpen = useSelector(selectIsBasketInfoOpen);
  const filteredProducts = useSelector(selectFilteredProducts);

  return { products, basket, isBasketInfoOpen, filteredProducts };
};

export default useProducts;
