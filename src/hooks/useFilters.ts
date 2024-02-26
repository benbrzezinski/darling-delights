import { useSelector } from "react-redux";
import {
  selectSearcher,
  selectProductType,
  selectSortingMethod,
} from "../redux/filters/selectors";

const useFilters = () => {
  const searcher = useSelector(selectSearcher);
  const productType = useSelector(selectProductType);
  const sortingMethod = useSelector(selectSortingMethod);

  return { searcher, productType, sortingMethod };
};

export default useFilters;
