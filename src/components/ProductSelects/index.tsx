import { useSearchParams } from "react-router-dom";
import { SingleValue } from "react-select";
import { OptionTypeObj, OptionType } from "../../types";
import Selects from "../Selects";
import scss from "./ProductSelects.module.scss";

const ProductSelects = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const options: OptionTypeObj = {
    delivery: [
      { value: "home", label: "Delivery to Home" },
      { value: "store", label: "Delivery to Store" },
    ],
    payment: [
      { value: "credit", label: "Credit Card Payment" },
      { value: "paypal", label: "PayPal Payment" },
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

  const handleSelect = (option: SingleValue<OptionType>, optionKey: string) => {
    if (option) {
      searchParams.set(optionKey, option.value);
      setSearchParams(searchParams);
    }
  };

  const handleValue = (optionKey: string) => {
    const option = options[optionKey].find(
      ({ value }) => value === searchParams.get(optionKey)
    );

    if (option) return option;

    return {
      value: "",
      label: optionKey.slice(0, 1).toLocaleUpperCase() + optionKey.slice(1),
    };
  };

  return (
    <div className={scss.paymentSelectsBox}>
      <Selects
        options={options.delivery}
        handleSelect={option => handleSelect(option, "delivery")}
        handleValue={() => handleValue("delivery")}
        width="272px"
        afterWidth="92%"
      />
      <Selects
        options={options.payment}
        handleSelect={option => handleSelect(option, "payment")}
        handleValue={() => handleValue("payment")}
        width="272px"
        afterWidth="92%"
      />
      <Selects
        options={options.warranty}
        handleSelect={option => handleSelect(option, "warranty")}
        handleValue={() => handleValue("warranty")}
        width="272px"
        afterWidth="92%"
      />
      <Selects
        options={options.care}
        handleSelect={option => handleSelect(option, "care")}
        handleValue={() => handleValue("care")}
        width="272px"
        afterWidth="92%"
      />
    </div>
  );
};

export default ProductSelects;
