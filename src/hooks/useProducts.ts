import { useSelector } from "react-redux";
import {
  selectProducts,
  selectFilteredProducts,
} from "../redux/products/selectors";

const useProducts = () => {
  const products = useSelector(selectProducts);
  const filteredProducts = useSelector(selectFilteredProducts);

  return { products, filteredProducts };
};

export default useProducts;
