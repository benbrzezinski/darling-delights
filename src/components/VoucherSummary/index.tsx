import { useState, useEffect, useRef, FormEventHandler } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { setTotal } from "../../redux/products/slice";
import useProducts from "../../hooks/useProducts";
import scss from "./VoucherSummary.module.scss";

const VoucherSummary = () => {
  const [voucherConfirmed, setVoucherConfirmed] = useState("");
  const [searchParams] = useSearchParams();
  const { basket } = useProducts();
  const dispatch = useDispatch();
  const voucherID = useRef(nanoid());

  const subtotal = basket.reduce(
    (acc, { price, quantity }) => price * Number(quantity) + acc,
    0
  );

  const discount = voucherConfirmed === "y" ? 25 : 0;
  const deliveryFee = searchParams.get("delivery") === "home" ? 5 : 0;

  const warrantyFee = !searchParams.get("warranty")
    ? 0
    : searchParams.get("warranty") === "1"
    ? 10
    : searchParams.get("warranty") === "2"
    ? 20
    : 0;

  const careFee = !searchParams.get("care")
    ? 0
    : searchParams.get("care") === "basic"
    ? 2
    : searchParams.get("care") === "premium"
    ? 6
    : 0;

  const totalFee = deliveryFee + warrantyFee + careFee;
  const total = subtotal - discount + totalFee;

  useEffect(() => {
    dispatch(setTotal(total.toFixed(2)));
  }, [total, dispatch]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const voucher = form.elements.namedItem("voucher") as HTMLInputElement;

    if (voucher.value === "$25 OFF") {
      setVoucherConfirmed("y");
    } else {
      setVoucherConfirmed("n");
      form.reset();
    }
  };

  return (
    <>
      <form className={scss.voucherForm} onSubmit={handleSubmit}>
        <label htmlFor={voucherID.current} className={scss.voucherLabel}>
          Voucher
        </label>
        <div className={scss.voucherBox}>
          <input
            type="text"
            name="voucher"
            id={voucherID.current}
            className={scss.voucherInput}
            required
          />
          <button type="submit" className={scss.voucherBtn}>
            Apply
          </button>
        </div>
        {voucherConfirmed === "y" ? (
          <p className={scss.voucherValue}>$25 Off</p>
        ) : voucherConfirmed === "n" ? (
          <p className={scss.error}>Voucher is invalid</p>
        ) : null}
      </form>
      <section className={scss.paymentSummary}>
        <h3 className={scss.paymentSummaryTitle}>Summary</h3>
        <div className={scss.paymentSummaryBox}>
          <p className={scss.paymentSummaryText}>Subtotal</p>
          <p className={scss.paymentSummaryPrice}>${subtotal.toFixed(2)}</p>
        </div>
        <div className={scss.paymentSummaryBox}>
          <p className={scss.paymentSummaryText}>Discount</p>
          <p className={scss.paymentSummaryPrice}>${discount.toFixed(2)}</p>
        </div>
        <div className={scss.paymentSummaryBox}>
          <p className={scss.paymentSummaryText}>Fee</p>
          <p className={scss.paymentSummaryPrice}>${totalFee.toFixed(2)}</p>
        </div>
        <div className={scss.paymentSummaryBoxTotal}>
          <p className={scss.paymentSummaryText}>Total</p>
          <p className={scss.paymentSummaryTotal}>${total.toFixed(2)}</p>
        </div>
      </section>
    </>
  );
};

export default VoucherSummary;
