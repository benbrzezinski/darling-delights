import { useLocation, useNavigate } from "react-router-dom";
import { FormEventHandler } from "react";
import { nanoid } from "nanoid";
import { LocationState } from "../../types";
import Notification from "../Notification";
import useProducts from "../../hooks/useProducts";
import useValidation from "../../hooks/useValidation";
import scss from "./PaymentDetailsForm.module.scss";

const PaymentDetailsForm = () => {
  const {
    verifyName,
    verifyLastName,
    verifyEmail,
    isNameChecked,
    isLastNameChecked,
    isEmailChecked,
  } = useValidation();
  const { basket } = useProducts();
  const location = useLocation();
  const navigate = useNavigate();

  const total = (location.state as LocationState)?.total;

  const ID = {
    firstName: nanoid(),
    lastName: nanoid(),
    email: nanoid(),
    country: nanoid(),
    state: nanoid(),
    city: nanoid(),
    zipCode: nanoid(),
    street: nanoid(),
    houseNumber: nanoid(),
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
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

    navigate(`/summary${location.search}`, { state: { total, basket } });
  };

  return (
    <div className={scss.wrapper}>
      {total && basket.length > 0 ? (
        <form className={scss.paymentDetailsForm} onSubmit={handleSubmit}>
          <h1 className={scss.title}>Complete the Form</h1>
          <div className={scss.paymentDetailsBox}>
            <div className={scss.inputBox}>
              <label className={scss.label} htmlFor={ID.firstName}>
                First name
              </label>
              <input
                className={scss.input}
                type="text"
                name="firstName"
                id={ID.firstName}
                placeholder="John"
                required
              />
              {isNameChecked && (
                <p className={scss.error}>Invalid first name</p>
              )}
            </div>
            <div className={scss.inputBox}>
              <label className={scss.label} htmlFor={ID.lastName}>
                Last name
              </label>
              <input
                className={scss.input}
                type="text"
                name="lastName"
                id={ID.lastName}
                placeholder="Doe"
                required
              />
              {isLastNameChecked && (
                <p className={scss.error}>Invalid last name</p>
              )}
            </div>
            <div className={scss.inputBox}>
              <label className={scss.label} htmlFor={ID.email}>
                E-mail
              </label>
              <input
                className={scss.input}
                type="email"
                name="email"
                id={ID.email}
                placeholder="examplemail@.com"
                required
              />
              {isEmailChecked && <p className={scss.error}>Invalid email</p>}
            </div>
          </div>
          <div className={scss.paymentDetailsBox}>
            <div className={scss.inputBox}>
              <label className={scss.label} htmlFor={ID.country}>
                Country
              </label>
              <input
                className={scss.input}
                type="text"
                name="country"
                id={ID.country}
                placeholder="USA"
                required
              />
            </div>
            <div className={scss.inputBox}>
              <label className={scss.label} htmlFor={ID.state}>
                State / Province
              </label>
              <input
                className={scss.input}
                type="text"
                name="state"
                id={ID.state}
                placeholder="NY"
                required
              />
            </div>
          </div>
          <div className={scss.paymentDetailsBox}>
            <div className={scss.inputBox}>
              <label className={scss.label} htmlFor={ID.city}>
                City / Village
              </label>
              <input
                className={scss.input}
                type="text"
                name="city"
                id={ID.city}
                placeholder="New York"
                required
              />
            </div>
            <div className={scss.inputBox}>
              <label className={scss.label} htmlFor={ID.zipCode}>
                Zip code
              </label>
              <input
                className={scss.input}
                type="text"
                name="zipCode"
                id={ID.zipCode}
                placeholder="10014"
                required
              />
            </div>
          </div>
          <div className={scss.paymentDetailsBox}>
            <div className={scss.inputBox}>
              <label className={scss.label} htmlFor={ID.street}>
                Street
              </label>
              <input
                className={scss.input}
                type="text"
                name="street"
                id={ID.street}
                placeholder="495 Grove Street"
                required
              />
            </div>
            <div className={scss.inputBox}>
              <label className={scss.label} htmlFor={ID.houseNumber}>
                House / Apartment number
              </label>
              <input
                className={scss.input}
                type="text"
                name="houseNumber"
                id={ID.houseNumber}
                placeholder="Apt #20"
                required
              />
            </div>
          </div>
          <button type="submit" className={scss.submitBtn}>
            Submit your order
          </button>
        </form>
      ) : (
        <Notification text="There is nothing interesting here" paddingTop="0" />
      )}
    </div>
  );
};

export default PaymentDetailsForm;
