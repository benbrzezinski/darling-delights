import { useSelector } from "react-redux";
import {
  selectProducts,
  selectBasket,
  selectFilteredProducts,
} from "../redux/products/selectors";

const useProducts = () => {
  const products = useSelector(selectProducts);
  const basket = useSelector(selectBasket);
  const filteredProducts = useSelector(selectFilteredProducts);

  return { products, basket, filteredProducts };
};

export default useProducts;
