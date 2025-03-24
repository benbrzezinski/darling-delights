import { ChangeEventHandler, MouseEventHandler } from "react";
import { useSearchParams } from "react-router-dom";
import { SingleValue } from "react-select";
import { OptionType } from "../../types";
import { ProductType, SortingMethod } from "../../types/enums";
import Selects from "../Selects";
import useIcons from "../../hooks/useIcons";
import scss from "./Filters.module.scss";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { Reset } = useIcons();

  const page = searchParams.get("p") ? Number(searchParams.get("p")) : 1;
  const productType = (searchParams.get("type")?.toUpperCase() ??
    "") as ProductType;
  const sortingMethod = (searchParams.get("sort")?.toUpperCase() ??
    "") as SortingMethod;

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
    const productDatasetType = e.target.dataset.type as ProductType;

    if (page !== 1) {
      searchParams.set("p", "1");
    }

    if (productDatasetType === ProductType.Default) {
      searchParams.delete("type");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set("type", productDatasetType.toLowerCase());
    setSearchParams(searchParams);
  };

  const handleSelect = (option: SingleValue<OptionType>) => {
    if (option) {
      const optionValue = option.value as SortingMethod;
      searchParams.set("sort", optionValue.toLowerCase());
      setSearchParams(searchParams);
    }
  };

  const handleValue = () => {
    const option = options.find(item => {
      const optionValue = item.value as SortingMethod;
      if (optionValue === sortingMethod) return item;
    });

    if (option) return option;

    return { value: SortingMethod.Default, label: "Sorting" };
  };

  const handleClearFilters: MouseEventHandler<HTMLButtonElement> = e => {
    const btn = e.currentTarget;
    btn.classList.add(scss.rotate);

    searchParams.delete("sort");
    setSearchParams(searchParams);

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
            cursor: sortingMethod ? "pointer" : "default",
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
