import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SingleValue } from "react-select";
import { OptionTypeObj, OptionType } from "../../types";
import Selects from "../Selects";
import useIcons from "../../hooks/useIcons";
import scss from "./ProductSelects.module.scss";

const ProductSelects = () => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { Info } = useIcons();

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

  const toggleMoreInfo = () => {
    if (!moreInfo) window.scrollBy({ top: 200, behavior: "smooth" });
    setMoreInfo(i => !i);
  };

  return (
    <div className={scss.paymentSelectsContainer}>
      <div className={scss.paymentSelectsBox}>
        <Selects
          options={options.payment}
          handleSelect={option => handleSelect(option, "payment")}
          handleValue={() => handleValue("payment")}
          width="272px"
          afterWidth="92%"
        />
        <Selects
          options={options.delivery}
          handleSelect={option => handleSelect(option, "delivery")}
          handleValue={() => handleValue("delivery")}
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
        <button type="button" className={scss.infoBtn} onClick={toggleMoreInfo}>
          <Info className={scss.infoIcon} />
        </button>
      </div>
      {moreInfo && (
        <>
          <h3 className={scss.paymentSelectsInfoTitle}>
            Warranty and Care are optional
          </h3>
          <ul className={scss.paymentSelectsInfoList}>
            <li className={scss.paymentSelectsInfoItem}>
              Delivery to Home / Delivery to Store: $5.00 / $0.00
            </li>
            <li className={scss.paymentSelectsInfoItem}>
              1 Year Warranty / 2 Years Warranty: $10.00 / $20.00
            </li>
            <li className={scss.paymentSelectsInfoItem}>
              Basic Care / Premium Care: $2.00 / $5.00
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default ProductSelects;
