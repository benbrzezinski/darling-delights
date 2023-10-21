import { SingleValue } from "react-select";
import { ChangeEventHandler } from "react";
import { useDispatch } from "react-redux";
import { setProductType, setSortedPrice } from "../../redux/filters/slice";
import { OptionType } from "../../types";
import { ProductType } from "../../types/enums";
import Selects from "../Selects";
import useFilters from "../../hooks/useFilters";
import scss from "./Filters.module.scss";

const Filters = () => {
  const dispatch = useDispatch();
  const { productType, sortedPrice } = useFilters();

  const options: OptionType[] = [
    { value: "asc", label: "Lowest to Highest" },
    { value: "desc", label: "Highest to Lowest" },
  ];

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const productType = e.target.dataset.type;
    if (productType !== undefined) dispatch(setProductType(productType));
  };

  const handleSelect = (option: SingleValue<OptionType>) => {
    if (option) dispatch(setSortedPrice(option.value));
  };

  const handleDefaultValue = () => {
    const option = options.find(({ value }) => value === sortedPrice);
    if (option) return option;
    return { value: "", label: "Sort by price" };
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
      <Selects
        options={options}
        handleSelect={handleSelect}
        handleValue={handleDefaultValue}
        width="190px"
        afterWidth="88.5%"
      />
    </div>
  );
};

export default Filters;
