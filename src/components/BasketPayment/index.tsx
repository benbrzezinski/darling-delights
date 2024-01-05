import {
  useState,
  useRef,
  ChangeEventHandler,
  FormEventHandler,
  FocusEventHandler,
} from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/lib/styles.scss";
import { toast } from "react-toastify";
import { InputRefs } from "../../types";
import ProductSelects from "../ProductSelects";
import VoucherSummary from "../VoucherSummary";
import useProducts from "../../hooks/useProducts";
import useValidation from "../../hooks/useValidation";
import scss from "./BasketPayment.module.scss";

const BasketPayment = () => {
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState({
    name: "",
    code: "",
    month: "",
    year: "",
    cvc: "",
    focus: "",
    blik1: "",
    blik2: "",
    blik3: "",
    blik4: "",
    blik5: "",
    blik6: "",
  });
  const { total } = useProducts();
  const { verifyCreditCard, isCreditCardChecked } = useValidation();
  const { search } = useLocation();
  const navigate = useNavigate();

  const inputRefs: InputRefs = {
    name: useRef(null),
    code: useRef(null),
    month: useRef(null),
    year: useRef(null),
    cvc: useRef(null),
    blik1: useRef(null),
    blik2: useRef(null),
    blik3: useRef(null),
    blik4: useRef(null),
    blik5: useRef(null),
    blik6: useRef(null),
  };

  const handleFocusInput: FocusEventHandler<HTMLInputElement> = e => {
    setValues(v => ({ ...v, focus: e.target.name }));
  };

  const handleFocusNextInput = (name: keyof InputRefs) => {
    const ref = inputRefs[name];
    if (ref && ref.current) ref.current.focus();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value, maxLength } = e.currentTarget;
    if (value !== "" && !value.match(/^[0-9]+$/)) return;
    setValues(v => ({ ...v, [name]: value }));

    if (value.length === maxLength) {
      switch (name) {
        case "code":
          handleFocusNextInput("month");
          break;
        case "month":
          handleFocusNextInput("year");
          break;
        case "year":
          handleFocusNextInput("cvc");
          break;
        case "blik1":
          handleFocusNextInput("blik2");
          break;
        case "blik2":
          handleFocusNextInput("blik3");
          break;
        case "blik3":
          handleFocusNextInput("blik4");
          break;
        case "blik4":
          handleFocusNextInput("blik5");
          break;
        case "blik5":
          handleFocusNextInput("blik6");
          break;
        default:
          return;
      }
    }
  };

  const handleCreditCardSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (
      verifyCreditCard("name", values.name, inputRefs.name.current) ||
      verifyCreditCard("code", values.code, inputRefs.code.current) ||
      verifyCreditCard("month", values.month, inputRefs.month.current) ||
      verifyCreditCard("year", values.year, inputRefs.year.current) ||
      verifyCreditCard("cvc", values.cvc, inputRefs.cvc.current)
    ) {
      return;
    }

    if (new Date(`${values.month}/01/${values.year}`) < new Date()) {
      return toast.warning("Date cannot be in the past");
    }

    if (
      searchParams.get("delivery") !== "home" &&
      searchParams.get("delivery") !== "store"
    ) {
      return toast.warning("Choose your delivery method");
    }

    navigate(`/payment${search}`, { state: { total } });
  };

  const handleBlikSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (
      searchParams.get("delivery") !== "home" &&
      searchParams.get("delivery") !== "store"
    ) {
      return toast.warning("Choose your delivery method");
    }

    navigate(`/payment${search}`, { state: { total } });
  };

  return (
    <section className={scss.paymentBox}>
      <h2 className={scss.title}>Payment method</h2>
      <ProductSelects />
      {searchParams.get("payment") === "credit" ||
      searchParams.get("payment") === "blik" ? (
        <>
          {searchParams.get("payment") === "credit" ? (
            <Cards
              number={values.code}
              expiry={`${values.month}/${values.year}`}
              cvc={values.cvc}
              name={values.name}
              focused={values.focus as Focused}
              acceptedCards={["visa", "mastercard"]}
              locale={{ valid: "Valid thru" }}
            />
          ) : (
            <div className={scss.paymentMethodBox}>
              <div
                className={scss.paymentMethodImg}
                style={{
                  backgroundImage: "url(assets/svgs/blik.svg)",
                }}
              ></div>
              <p className={scss.paymentMethodText}>BLIK</p>
            </div>
          )}
          <form
            className={scss.paymentMethodForm}
            onSubmit={
              searchParams.get("payment") === "credit"
                ? handleCreditCardSubmit
                : handleBlikSubmit
            }
          >
            {searchParams.get("payment") === "credit" ? (
              <>
                <div className={scss.flexBox}>
                  <input
                    type="text"
                    name="name"
                    className={`${scss.creditCardInput} ${scss.grow}`}
                    ref={inputRefs.name}
                    placeholder="Name"
                    required
                    value={values.name}
                    onChange={e =>
                      setValues(v => ({
                        ...v,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    onFocus={handleFocusInput}
                    onBlur={e => verifyCreditCard("name", e.target.value)}
                  />
                </div>
                <div className={scss.flexBox}>
                  <input
                    type="text"
                    name="code"
                    className={`${scss.creditCardInput} ${scss.grow}`}
                    ref={inputRefs.code}
                    placeholder="Card number"
                    maxLength={16}
                    required
                    value={values.code}
                    onChange={handleChange}
                    onFocus={handleFocusInput}
                    onBlur={e => verifyCreditCard("code", e.target.value)}
                  />
                  <input
                    type="text"
                    name="month"
                    className={`${scss.creditCardInput} ${scss.expiry}`}
                    ref={inputRefs.month}
                    placeholder="MM"
                    maxLength={2}
                    required
                    value={values.month}
                    onChange={handleChange}
                    onFocus={handleFocusInput}
                    onBlur={e => {
                      verifyCreditCard("month", e.target.value);

                      if (Number(e.target.value) !== 0) {
                        setValues(v => ({
                          ...v,
                          [e.target.name]: e.target.value.padStart(2, "0"),
                        }));
                      }
                    }}
                  />
                  <input
                    type="text"
                    name="year"
                    className={`${scss.creditCardInput} ${scss.expiry}`}
                    ref={inputRefs.year}
                    placeholder="YY"
                    maxLength={2}
                    required
                    value={values.year}
                    onChange={handleChange}
                    onFocus={handleFocusInput}
                    onBlur={e => {
                      verifyCreditCard("year", e.target.value);

                      if (Number(e.target.value) !== 0) {
                        setValues(v => ({
                          ...v,
                          [e.target.name]: e.target.value.padStart(2, "0"),
                        }));
                      }
                    }}
                  />
                  <input
                    type="text"
                    name="cvc"
                    className={`${scss.creditCardInput} ${scss.cvc}`}
                    ref={inputRefs.cvc}
                    placeholder="CVC"
                    maxLength={3}
                    required
                    value={values.cvc}
                    onChange={handleChange}
                    onFocus={handleFocusInput}
                    onBlur={e => verifyCreditCard("cvc", e.target.value)}
                  />
                </div>
                {isCreditCardChecked && (
                  <p className={scss.error}>{isCreditCardChecked}</p>
                )}
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="blik1"
                  className={scss.blikInput}
                  ref={inputRefs.blik1}
                  placeholder="_"
                  maxLength={1}
                  required
                  value={values.blik1}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="blik2"
                  className={scss.blikInput}
                  ref={inputRefs.blik2}
                  placeholder="_"
                  maxLength={1}
                  required
                  value={values.blik2}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="blik3"
                  className={scss.blikInput}
                  ref={inputRefs.blik3}
                  placeholder="_"
                  maxLength={1}
                  required
                  value={values.blik3}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="blik4"
                  className={scss.blikInput}
                  ref={inputRefs.blik4}
                  placeholder="_"
                  maxLength={1}
                  required
                  value={values.blik4}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="blik5"
                  className={scss.blikInput}
                  ref={inputRefs.blik5}
                  placeholder="_"
                  maxLength={1}
                  required
                  value={values.blik5}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="blik6"
                  className={scss.blikInput}
                  ref={inputRefs.blik6}
                  placeholder="_"
                  maxLength={1}
                  required
                  value={values.blik6}
                  onChange={handleChange}
                />
              </>
            )}
            <button type="submit" className={scss.proceedBtn}>
              Proceed to payment
            </button>
          </form>
          <VoucherSummary />
        </>
      ) : null}
    </section>
  );
};

export default BasketPayment;
