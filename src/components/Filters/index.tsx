import Select, { SingleValue } from "react-select";
import { ChangeEventHandler } from "react";
import { useDispatch } from "react-redux";
import { setProductType, setSortedPrice } from "../../redux/filters/slice";
import { OptionType } from "../../types";
import { ProductType } from "../../types/enums";
import useFilters from "../../hooks/useFilters";
import scss from "./Filters.module.scss";

const Filters = () => {
  const dispatch = useDispatch();
  const { productType, sortedPrice } = useFilters();

  const options: OptionType[] = [
    { value: "asc", label: "lowest to highest" },
    { value: "desc", label: "highest to lowest" },
  ];

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const productType = e.target.dataset.type;
    if (productType !== undefined) dispatch(setProductType(productType));
  };

  const handleSelect = (option: SingleValue<OptionType>) => {
    if (option) dispatch(setSortedPrice(option.value));
  };

  const handleDefaultValue = () => {
    switch (sortedPrice) {
      case "asc":
        return options[0];
      case "desc":
        return options[1];
      default:
        return { value: "", label: "Sort by price" };
    }
  };

  return (
    <div className={scss.wrapper}>
      <ul className={scss.radioList}>
        <li className={scss.radioItem}>
          <label className={scss.radioLabel}>
            <input
              type="radio"
              name="filter"
              className={scss.radio}
              defaultChecked={productType === ""}
              data-type=""
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
              defaultChecked={productType === "RING"}
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
              defaultChecked={productType === "BRACELET"}
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
              defaultChecked={productType === "NECKLACE"}
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
              defaultChecked={productType === "EARRING"}
              data-type={ProductType.Earring}
              onChange={handleChange}
            />
            Earrings
          </label>
        </li>
      </ul>
      <Select
        options={options}
        onChange={handleSelect}
        defaultValue={handleDefaultValue()}
        className={scss.reactSelectContainer}
        styles={{
          control: baseStyles => ({
            ...baseStyles,
            boxShadow: "none",
            cursor: "pointer",
          }),
          menu: baseStyles => ({
            ...baseStyles,
            boxShadow: "none",
          }),
          menuList: baseStyles => ({
            ...baseStyles,
            boxShadow: "0px 0px 1px var(--cl-5), 0px 0px 2px var(--cl-5)",
            borderRadius: "4px",
            padding: 0,
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isFocused ? "white" : "black",
            backgroundColor: state.isFocused ? "#0d554a" : "white",
            "&:hover": {
              backgroundColor: "#0d554a",
            },
            cursor: "pointer",
          }),
          indicatorSeparator: baseStyles => ({
            ...baseStyles,
            height: "20px",
          }),
        }}
      />
    </div>
  );
};

export default Filters;
