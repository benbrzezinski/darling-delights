import { useSearchParams } from "react-router-dom";
import { ChangeEventHandler } from "react";
import { toast } from "react-toastify";
import scss from "./Quantity.module.scss";

const Quantity = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const quantity = e.currentTarget.value;
    const min = Number(e.currentTarget.min);
    const max = Number(e.currentTarget.max);

    if (quantity === "") {
      searchParams.set("quantity", "");
      setSearchParams(searchParams);
      return (e.currentTarget.value = "");
    }

    if (Number(quantity) < min || Number(quantity) > max) {
      searchParams.set("quantity", "1");
      setSearchParams(searchParams);
      e.currentTarget.value = "1";
      return toast.warning("Enter a value from 1 to 99");
    }

    searchParams.set("quantity", quantity);
    setSearchParams(searchParams);
  };

  const decreaseQuantity = () => {
    const quantity = String(Number(searchParams.get("quantity")) - 1);

    if (Number(quantity) < 1) {
      return toast.warning("Enter a value from 1 to 99");
    }

    searchParams.set("quantity", quantity);
    setSearchParams(searchParams);
  };

  const increaseQuantity = () => {
    const quantity = String(Number(searchParams.get("quantity")) + 1);

    if (Number(quantity) > 99) {
      return toast.warning("Enter a value from 1 to 99");
    }

    searchParams.set("quantity", quantity);
    setSearchParams(searchParams);
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
          className={scss.quantity}
          value={searchParams.get("quantity") ?? "1"}
          min="1"
          max="99"
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
    </div>
  );
};

export default Quantity;
