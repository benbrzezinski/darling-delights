import Select from "react-select";
import { ChangeEventHandler } from "react";
import { useDispatch } from "react-redux";
import { OptionType } from "../../types";
import { setProductType, setSortedPrice } from "../../redux/filters/slice";
import scss from "./Filters.module.scss";

const Filters = () => {
  const dispatch = useDispatch();
  const options: OptionType[] = [
    { value: "asc", label: "lowest to highest" },
    { value: "desc", label: "highest to lowest" },
  ];

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const productType = e.target.dataset.type;
    if (productType !== undefined) dispatch(setProductType(productType));
  };

  const handleSelect = (option: OptionType | null) => {
    if (option) dispatch(setSortedPrice(option.value));
  };

  return (
    <div className={scss.wrapper}>
      <ul className={scss.radioList}>
        <li className={scss.radioItem}>
          <label className={scss.radioLabel}>
            <input
              type="radio"
              name="filter"
              defaultChecked
              className={scss.radio}
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
              data-type="RING"
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
              data-type="BRACELET"
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
              data-type="NECKLACE"
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
              data-type="EARRING"
              onChange={handleChange}
            />
            Earrings
          </label>
        </li>
      </ul>
      <Select
        options={options}
        onChange={handleSelect}
        defaultValue={{ value: "", label: "Sort by price" }}
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
