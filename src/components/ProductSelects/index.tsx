import { useState } from "react";
import Selects from "../Selects";
import useSelectsPropsProduct from "../../hooks/useSelectsPropsProduct";
import useIcons from "../../hooks/useIcons";
import scss from "./ProductSelects.module.scss";

const ProductSelects = () => {
  const [moreInfo, setMoreInfo] = useState(false);
  const { options, handleSelect, handleValue } = useSelectsPropsProduct();
  const { Info } = useIcons();

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
        />
        <Selects
          options={options.delivery}
          handleSelect={option => handleSelect(option, "delivery")}
          handleValue={() => handleValue("delivery")}
          width="272px"
        />
        <Selects
          options={options.warranty}
          handleSelect={option => handleSelect(option, "warranty")}
          handleValue={() => handleValue("warranty")}
          width="272px"
        />
        <Selects
          options={options.care}
          handleSelect={option => handleSelect(option, "care")}
          handleValue={() => handleValue("care")}
          width="272px"
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
