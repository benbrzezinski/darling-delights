import {
  Navigate,
  useSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FormEventHandler, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { LocationState } from "../../types";
import { setIsUserAllowed } from "../../redux/auth/slice";
import Selects from "../Selects";
import useSelectsPropsStore from "../../hooks/useSelectsPropsStore";
import useProducts from "../../hooks/useProducts";
import useValidation from "../../hooks/useValidation";
import scss from "./PaymentDetailsForm.module.scss";

const PaymentDetailsForm = () => {
  const ID = useRef({
    firstName: nanoid(),
    lastName: nanoid(),
    email: nanoid(),
    country: nanoid(),
    state: nanoid(),
    city: nanoid(),
    zipCode: nanoid(),
    street: nanoid(),
    houseNumber: nanoid(),
    toastWarning: nanoid(),
  });
  const [searchParams] = useSearchParams();
  const {
    verifyName,
    verifyLastName,
    verifyEmail,
    isNameChecked,
    isLastNameChecked,
    isEmailChecked,
  } = useValidation();
  const { selectedStore, options, handleSelect, handleValue } =
    useSelectsPropsStore();
  const { basket } = useProducts();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const total = (location.state as LocationState)?.total;

  const handleSubmitToHome: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const firstName = form.elements.namedItem("firstName") as HTMLInputElement;
    const lastName = form.elements.namedItem("lastName") as HTMLTextAreaElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const country = form.elements.namedItem("country") as HTMLInputElement;
    const state = form.elements.namedItem("state") as HTMLInputElement;
    const city = form.elements.namedItem("city") as HTMLInputElement;
    const zipCode = form.elements.namedItem("zipCode") as HTMLInputElement;
    const street = form.elements.namedItem("street") as HTMLInputElement;
    const houseNumber = form.elements.namedItem(
      "houseNumber"
    ) as HTMLInputElement;

    if (
      !verifyName(firstName.value.trim()) ||
      !verifyLastName(lastName.value.trim()) ||
      !verifyEmail(email.value.trim())
    ) {
      verifyLastName(lastName.value.trim());
      verifyEmail(email.value.trim());
      return;
    }

    dispatch(setIsUserAllowed(true));

    navigate(`/summary${location.search}`, {
      state: {
        total,
        basket,
        fullName: `${firstName.value} ${lastName.value}`,
        country: country.value,
        state: state.value,
        city: city.value,
        zipCode: zipCode.value,
        street: street.value,
        houseNumber: houseNumber.value,
      },
      replace: true,
    });
  };

  const handleSubmitToStore: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const firstName = form.elements.namedItem("firstName") as HTMLInputElement;
    const lastName = form.elements.namedItem("lastName") as HTMLTextAreaElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;

    if (
      !verifyName(firstName.value.trim()) ||
      !verifyLastName(lastName.value.trim()) ||
      !verifyEmail(email.value.trim())
    ) {
      verifyLastName(lastName.value.trim());
      verifyEmail(email.value.trim());
      return;
    }

    const isStoreNotSelected = options.every(
      ({ value }) => value !== selectedStore
    );

    if (isStoreNotSelected) {
      toast.warning("Choose store address", {
        toastId: ID.current.toastWarning,
      });
      return;
    }

    const storeAddress = selectedStore.split(", ");
    dispatch(setIsUserAllowed(true));

    navigate(`/summary${location.search}`, {
      state: {
        total,
        basket,
        fullName: `${firstName.value} ${lastName.value}`,
        country: storeAddress[0],
        state: storeAddress[1],
        city: storeAddress[2],
        zipCode: storeAddress[3],
        street: storeAddress[4],
        houseNumber: storeAddress[5],
      },
      replace: true,
    });
  };

  return total && basket.length > 0 ? (
    <div className={`container ${scss.wrapper}`}>
      <form
        className={scss.paymentDetailsForm}
        onSubmit={
          searchParams.get("delivery") === "home"
            ? handleSubmitToHome
            : handleSubmitToStore
        }
      >
        <h1 className={scss.title}>Complete the Form</h1>
        <div className={scss.paymentDetailsBox}>
          <div className={scss.inputBox}>
            <label className={scss.label} htmlFor={ID.current.firstName}>
              First name
            </label>
            <input
              className={scss.input}
              type="text"
              name="firstName"
              id={ID.current.firstName}
              placeholder="John"
              required
            />
            {isNameChecked && <p className={scss.error}>Invalid first name</p>}
          </div>
          <div className={scss.inputBox}>
            <label className={scss.label} htmlFor={ID.current.lastName}>
              Last name
            </label>
            <input
              className={scss.input}
              type="text"
              name="lastName"
              id={ID.current.lastName}
              placeholder="Doe"
              required
            />
            {isLastNameChecked && (
              <p className={scss.error}>Invalid last name</p>
            )}
          </div>
          <div className={scss.inputBox}>
            <label className={scss.label} htmlFor={ID.current.email}>
              E-mail
            </label>
            <input
              className={scss.input}
              type="email"
              name="email"
              id={ID.current.email}
              placeholder="examplemail@.com"
              required
            />
            {isEmailChecked && <p className={scss.error}>Invalid email</p>}
          </div>
        </div>
        {searchParams.get("delivery") === "home" ? (
          <>
            <div className={scss.paymentDetailsBox}>
              <div className={scss.inputBox}>
                <label className={scss.label} htmlFor={ID.current.country}>
                  Country
                </label>
                <input
                  className={scss.input}
                  type="text"
                  name="country"
                  id={ID.current.country}
                  placeholder="USA"
                  required
                  pattern="/[^ ]/"
                  title="There should be at least one character"
                />
              </div>
              <div className={scss.inputBox}>
                <label className={scss.label} htmlFor={ID.current.state}>
                  State / Province
                </label>
                <input
                  className={scss.input}
                  type="text"
                  name="state"
                  id={ID.current.state}
                  placeholder="NY"
                  required
                  pattern="/[^ ]/"
                  title="There should be at least one character"
                />
              </div>
            </div>
            <div className={scss.paymentDetailsBox}>
              <div className={scss.inputBox}>
                <label className={scss.label} htmlFor={ID.current.city}>
                  City / Village
                </label>
                <input
                  className={scss.input}
                  type="text"
                  name="city"
                  id={ID.current.city}
                  placeholder="New York"
                  required
                  pattern="/[^ ]/"
                  title="There should be at least one character"
                />
              </div>
              <div className={scss.inputBox}>
                <label className={scss.label} htmlFor={ID.current.zipCode}>
                  Zip code
                </label>
                <input
                  className={scss.input}
                  type="text"
                  name="zipCode"
                  id={ID.current.zipCode}
                  placeholder="10014"
                  required
                  pattern="/[^ ]/"
                  title="There should be at least one character"
                />
              </div>
            </div>
            <div className={scss.paymentDetailsBox}>
              <div className={scss.inputBox}>
                <label className={scss.label} htmlFor={ID.current.street}>
                  Street
                </label>
                <input
                  className={scss.input}
                  type="text"
                  name="street"
                  id={ID.current.street}
                  placeholder="495 Grove Street"
                  required
                  pattern="/[^ ]/"
                  title="There should be at least one character"
                />
              </div>
              <div className={scss.inputBox}>
                <label className={scss.label} htmlFor={ID.current.houseNumber}>
                  House / Apartment number
                </label>
                <input
                  className={scss.input}
                  type="text"
                  name="houseNumber"
                  id={ID.current.houseNumber}
                  placeholder="Apt #20"
                  required
                  pattern="/[^ ]/"
                  title="There should be at least one character"
                />
              </div>
            </div>
          </>
        ) : (
          <Selects
            options={options}
            handleSelect={handleSelect}
            handleValue={handleValue}
            width="100%"
          />
        )}
        <button type="submit" className={scss.submitBtn}>
          Submit your order
        </button>
      </form>
    </div>
  ) : (
    <Navigate to="/basket" replace />
  );
};

export default PaymentDetailsForm;
