import { useSearchParams } from "react-router-dom";
import { SingleValue } from "react-select";
import { OptionTypeObj, OptionType } from "../types";

const useSelectsPropsProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const options: OptionTypeObj = {
    payment: [
      { value: "credit", label: "Credit Card Payment" },
      { value: "blik", label: "BLIK Payment" },
    ],
    delivery: [
      { value: "home", label: "Delivery to Home" },
      { value: "store", label: "Delivery to Store" },
    ],
    warranty: [
      { value: "1", label: "1 Year Warranty" },
      { value: "2", label: "2 Years Warranty" },
    ],
    care: [
      { value: "basic", label: "Basic Care" },
      { value: "premium", label: "Premium Care" },
    ],
  };

  const handleSelect = (
    option: SingleValue<OptionType>,
    optionKey: keyof OptionTypeObj
  ) => {
    if (option) {
      searchParams.set(optionKey, option.value);
      setSearchParams(searchParams);
    }
  };

  const handleValue = (optionKey: keyof OptionTypeObj) => {
    const option = options[optionKey].find(
      ({ value }) => value === searchParams.get(optionKey)
    );

    if (option) return option;

    return {
      value: "",
      label: optionKey.slice(0, 1).toUpperCase() + optionKey.slice(1),
    };
  };

  return { options, handleSelect, handleValue };
};

export default useSelectsPropsProduct;
