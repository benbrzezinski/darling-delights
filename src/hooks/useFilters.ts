import { useSelector } from "react-redux";
import {
  selectSearcher,
  selectProductType,
  selectSortedPrice,
} from "../redux/filters/selectors";

const useFilters = () => {
  const searcher = useSelector(selectSearcher);
  const productType = useSelector(selectProductType);
  const sortedPrice = useSelector(selectSortedPrice);

  return { searcher, productType, sortedPrice };
};

export default useFilters;
