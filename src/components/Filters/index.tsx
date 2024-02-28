import { ChangeEventHandler, MouseEventHandler } from "react";
import { SingleValue } from "react-select";
import { useDispatch } from "react-redux";
import { setProductType, setSortingMethod } from "../../redux/filters/slice";
import { OptionType } from "../../types";
import { ProductType, SortingMethod } from "../../types/enums";
import Selects from "../Selects";
import useFilters from "../../hooks/useFilters";
import useIcons from "../../hooks/useIcons";
import scss from "./Filters.module.scss";

const Filters = () => {
  const { productType, sortingMethod } = useFilters();
  const { Reset } = useIcons();
  const dispatch = useDispatch();

  const options: OptionType[] = [
    {
      value: SortingMethod.Ascending,
      label: "Sort by price: to highest",
    },
    {
      value: SortingMethod.Descending,
      label: "Sort by price: to lowest",
    },
    {
      value: SortingMethod.Alphabetically,
      label: "Sort by name: A-Z",
    },
    {
      value: SortingMethod.NonAlphabetically,
      label: "Sort by name: Z-A",
    },
  ];

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const productTypeData = e.target.dataset.type as ProductType | undefined;
    if (productTypeData !== undefined) {
      dispatch(setProductType(productTypeData));
    }
  };

  const handleSelect = (option: SingleValue<OptionType>) => {
    if (option) {
      const optionValue = option.value as SortingMethod;
      dispatch(setSortingMethod(optionValue));
    }
  };

  const handleValue = () => {
    const option = options.find(item => {
      const optionValue = item.value as SortingMethod;
      if (optionValue === sortingMethod) return item;
    });

    if (option) return option;
    return { value: SortingMethod.Default, label: "Filters" };
  };

  const handleClearFilters: MouseEventHandler<HTMLButtonElement> = e => {
    const btn = e.currentTarget;
    btn.classList.add(scss.rotate);
    dispatch(setSortingMethod(SortingMethod.Default));
    setTimeout(() => {
      btn.classList.remove(scss.rotate);
    }, 300);
  };

  return (
    <div className={`container ${scss.wrapper}`}>
      <ul className={scss.radioList}>
        <li className={scss.radioItem}>
          <label className={scss.radioLabel}>
            <input
              type="radio"
              name="filter"
              className={scss.radio}
              checked={productType === ProductType.Default}
              data-type={ProductType.Default}
              onChange={handleChange}
            />
            All
          </label>
        </li>
        <li className={scss.radioItem}>
          <label className={scss.radioLabel}>
            <input
              type="radio"
              name="filter"
              className={scss.radio}
              checked={productType === ProductType.Ring}
              data-type={ProductType.Ring}
              onChange={handleChange}
            />
            Rings
          </label>
        </li>
        <li className={scss.radioItem}>
          <label className={scss.radioLabel}>
            <input
              type="radio"
              name="filter"
              className={scss.radio}
              checked={productType === ProductType.Bracelet}
              data-type={ProductType.Bracelet}
              onChange={handleChange}
            />
            Bracelets
          </label>
        </li>
        <li className={scss.radioItem}>
          <label className={scss.radioLabel}>
            <input
              type="radio"
              name="filter"
              className={scss.radio}
              checked={productType === ProductType.Necklace}
              data-type={ProductType.Necklace}
              onChange={handleChange}
            />
            Necklaces
          </label>
        </li>
        <li className={scss.radioItem}>
          <label className={scss.radioLabel}>
            <input
              type="radio"
              name="filter"
              className={scss.radio}
              checked={productType === ProductType.Earring}
              data-type={ProductType.Earring}
              onChange={handleChange}
            />
            Earrings
          </label>
        </li>
      </ul>
      <div className={scss.filtersBox}>
        <Selects
          options={options}
          handleSelect={handleSelect}
          handleValue={handleValue}
          width="200px"
          zIndex={2}
        />
        <button
          className={scss.clearFiltersBtn}
          style={{
            backgroundColor: sortingMethod ? "var(--cl-12)" : "var(--cl-10)",
          }}
          type="button"
          title="Clear Filters"
          onClick={handleClearFilters}
          disabled={sortingMethod ? false : true}
        >
          <Reset className={scss.clearFiltersIcon} />
        </button>
      </div>
    </div>
  );
};

export default Filters;
