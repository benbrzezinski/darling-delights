import { useState, useRef, FormEventHandler } from "react";
import { useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
import useProducts from "../../hooks/useProducts";
import scss from "./VoucherSummary.module.scss";

const VoucherSummary = () => {
  const [voucherConfirmed, setVoucherConfirmed] = useState("");
  const [searchParams] = useSearchParams();
  const { basket } = useProducts();
  const voucherID = useRef(nanoid());

  const subtotal = basket.reduce((acc, { price }) => acc + price, 0);
  const discount = voucherConfirmed === "y" ? 25 : 0;
  const fee =
    (searchParams.get("delivery") === "home" ? 5 : 0) +
    (!searchParams.get("warranty")
      ? 0
      : searchParams.get("warranty") === "1"
      ? 10
      : 20) +
    (!searchParams.get("care")
      ? 0
      : searchParams.get("care") === "basic"
      ? 2
      : 5);
  const total = subtotal - discount + fee;

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
          <p className={scss.paymentSummaryPrice}>${fee.toFixed(2)}</p>
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
