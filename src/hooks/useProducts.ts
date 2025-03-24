import { useSelector } from "react-redux";
import {
  selectProducts,
  selectBasket,
  selectFavourites,
  selectIsBasketInfoOpen,
  selectTotal,
} from "../redux/products/selectors";
import { useSearchParams } from "react-router-dom";
import { ProductPlacement, ProductType, SortingMethod } from "../types/enums";

const useProducts = () => {
  const [searchParams] = useSearchParams();
  const products = useSelector(selectProducts);
  const basket = useSelector(selectBasket);
  const favourites = useSelector(selectFavourites);
  const isBasketInfoOpen = useSelector(selectIsBasketInfoOpen);
  const total = useSelector(selectTotal);
  const searcherQuery = searchParams.get("q") ?? "";
  const productType = (searchParams.get("type")?.toUpperCase() ??
    "") as ProductType;
  const sortingMethod = (searchParams.get("sort")?.toUpperCase() ??
    "") as SortingMethod;

  const filterProducts = () => {
    const filtered = products.filter(
      ({ placement, name, type }) =>
        placement.includes(ProductPlacement.Shop) &&
        name.toLowerCase().includes(searcherQuery.toLowerCase().trim()) &&
        type.startsWith(productType)
    );

    switch (sortingMethod) {
      case SortingMethod.Default:
        return filtered;

      case SortingMethod.Ascending:
        return filtered.sort((a, b) => a.price - b.price);

      case SortingMethod.Descending:
        return filtered.sort((a, b) => b.price - a.price);

      case SortingMethod.Alphabetically:
        return filtered.sort((a, b) => a.name.localeCompare(b.name));

      case SortingMethod.NonAlphabetically:
        return filtered.sort((a, b) => b.name.localeCompare(a.name));

      default:
        return filtered;
    }
  };

  return {
    products,
    basket,
    favourites,
    isBasketInfoOpen,
    total,
    filteredProducts: filterProducts(),
  };
};

export default useProducts;
