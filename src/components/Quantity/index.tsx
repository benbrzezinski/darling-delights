import { ChangeEventHandler, useState } from "react";
import { useSearchParams } from "react-router-dom";
import validateQuantity from "../../utils/validateQuantity";
import scss from "./Quantity.module.scss";

const Quantity = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isQuantityInvalid, setIsQuantityInvalid] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const input = e.target;
    const quantity = input.value;
    const min = Number(input.min);
    const max = Number(input.max);

    if (quantity === "") {
      searchParams.set("quantity", "");
      setSearchParams(searchParams);
      e.target.value = "";
      return;
    }

    if (Number(quantity) < min || Number(quantity) > max) {
      searchParams.set("quantity", "1");
      setSearchParams(searchParams);
      e.target.value = "1";
      setIsQuantityInvalid(true);
      return;
    }

    searchParams.set("quantity", quantity);
    setSearchParams(searchParams);
    setIsQuantityInvalid(false);
  };

  const decreaseQuantity = () => {
    const quantity = String(Number(searchParams.get("quantity")) - 1);

    if (Number(quantity) < 1) {
      setIsQuantityInvalid(true);
      return;
    }

    searchParams.set("quantity", quantity);
    setSearchParams(searchParams);
    setIsQuantityInvalid(false);
  };

  const increaseQuantity = () => {
    const quantity = String(Number(searchParams.get("quantity")) + 1);

    if (Number(quantity) > 99) {
      setIsQuantityInvalid(true);
      return;
    }

    searchParams.set("quantity", quantity);
    setSearchParams(searchParams);
    setIsQuantityInvalid(false);
  };

  return (
    <div>
      <p className={scss.text}>Quantity</p>
      <div className={scss.quantityBox}>
        <button
          type="button"
          className={scss.quantityBtn}
          onClick={decreaseQuantity}
        >
          -
        </button>
        <input
          type="number"
          name="quantity"
          inputMode="numeric"
          className={scss.quantity}
          min={1}
          max={99}
          value={validateQuantity(searchParams.get("quantity"), -1)}
          onChange={handleChange}
        />
        <button
          type="button"
          className={scss.quantityBtn}
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
      {isQuantityInvalid && (
        <p className={scss.error}>Allowed values are between 1 and 99</p>
      )}
    </div>
  );
};

export default Quantity;
