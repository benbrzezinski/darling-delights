import { useState, useEffect, useRef, FormEventHandler } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { VoucherType } from "../../types/enums";
import { setTotal } from "../../redux/products/slice";
import useProducts from "../../hooks/useProducts";
import scss from "./TransactionSummary.module.scss";

const TransactionSummary = () => {
  const MIN_VAL_FOR_DELIVERY_VOUCHER = 200;
  const [voucherList, setVoucherList] = useState<VoucherType[]>([]);
  const [voucherIsInvalid, setVoucherIsInvalid] = useState("");
  const [searchParams] = useSearchParams();
  const { basket } = useProducts();
  const dispatch = useDispatch();
  const voucherID = useRef(nanoid());

  const subtotal = basket.reduce(
    (acc, { price, quantity }) => price * Number(quantity) + acc,
    0
  );

  const voucherPremium = voucherList.includes(VoucherType.Premium) ? 25 : 0;
  const voucherFreeDelivery = voucherList.includes(VoucherType.FreeDelivery)
    ? 5
    : 0;

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

  const discount = voucherPremium + voucherFreeDelivery;
  const totalFee = deliveryFee + warrantyFee + careFee;
  const total = subtotal - discount + totalFee;

  useEffect(() => {
    dispatch(setTotal(total.toFixed(2)));
  }, [total, dispatch]);

  useEffect(() => {
    if (
      voucherList.includes(VoucherType.FreeDelivery) &&
      (total < MIN_VAL_FOR_DELIVERY_VOUCHER ||
        searchParams.get("delivery") !== "home")
    ) {
      const updatedVoucherList = voucherList.filter(
        voucher => voucher !== VoucherType.FreeDelivery
      );

      setVoucherList(updatedVoucherList);
    }
  }, [voucherList, total, searchParams]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const voucher = form.elements.namedItem("voucher") as HTMLInputElement;
    const voucherValue = voucher.value as VoucherType;

    if (
      voucherValue === VoucherType.Premium ||
      voucherValue === VoucherType.FreeDelivery
    ) {
      setVoucherIsInvalid("");

      if (voucherList.includes(voucherValue)) {
        setVoucherIsInvalid("This voucher has already been used");
        return;
      }

      if (voucherValue === VoucherType.FreeDelivery) {
        if (searchParams.get("delivery") !== "home") {
          setVoucherIsInvalid("Free shipping only available for home delivery");
          return;
        }

        if (total < MIN_VAL_FOR_DELIVERY_VOUCHER) {
          setVoucherIsInvalid("The minimum value for free delivery is $200.00");
          return;
        }
      }

      setVoucherList(v => [...v, voucherValue]);
      form.reset();
    } else {
      setVoucherIsInvalid("The voucher provided is invalid");
    }
  };

  return (
    <>
      <form className={scss.voucherForm} onSubmit={handleSubmit}>
        <div>
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
        </div>
        {voucherIsInvalid && <p className={scss.error}>{voucherIsInvalid}</p>}
        {voucherList.length > 0 && (
          <ul className={scss.voucherList}>
            {voucherList.map(voucher => (
              <li key={nanoid()}>
                <p className={scss.voucherValue}>{voucher}</p>
              </li>
            ))}
          </ul>
        )}
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

export default TransactionSummary;
