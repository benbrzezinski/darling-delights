import { useState } from "react";
import { VerifyCreditCardType } from "../types";

const useValidation = () => {
  const [isNameChecked, setIsNameChecked] = useState(false);
  const [isLastNameChecked, setIsLastNameChecked] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isMessageChecked, setIsMessageChecked] = useState(false);
  const [isCreditCardChecked, setIsCreditCardChecked] = useState<
    string | boolean
  >(false);

  const verifyName = (name: string) => {
    if (
      !name.match(/^[A-Za-z\u0400-\u04FF\u0500-\u052F\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/)
    ) {
      setIsNameChecked(true);
      return false;
    }

    setIsNameChecked(false);
    return true;
  };

  const verifyLastName = (name: string) => {
    if (
      !name.match(/^[A-Za-z\u0400-\u04FF\u0500-\u052F\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/)
    ) {
      setIsLastNameChecked(true);
      return false;
    }

    setIsLastNameChecked(false);
    return true;
  };

  const verifyEmail = (email: string) => {
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      setIsEmailChecked(true);
      return false;
    }

    setIsEmailChecked(false);
    return true;
  };

  const verifyMessage = (message: string) => {
    if (!(message.trim().split(" ").length >= 10)) {
      setIsMessageChecked(true);
      return false;
    }

    setIsMessageChecked(false);
    return true;
  };

  const verifyCreditCard: VerifyCreditCardType = (name, value, ref) => {
    switch (name) {
      case "name":
        if (
          !value.match(
            /^[A-Za-z\u0400-\u04FF\u0500-\u052F\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/
          )
        ) {
          setIsCreditCardChecked("Provided name is invalid");
          if (ref) ref.focus();
          return true;
        }
        break;

      case "code":
        if (
          !value.match(
            /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)/
          )
        ) {
          setIsCreditCardChecked("Card number is invalid");
          if (ref) ref.focus();
          return true;
        }
        break;

      case "month":
        if (value.length !== 2 || Number(value) < 1 || Number(value) > 12) {
          setIsCreditCardChecked(
            "Expiry month is invalid, allowed values are 01-12"
          );
          if (ref) ref.focus();
          return true;
        }
        break;

      case "year": {
        const year = new Date();

        if (
          value.length !== 2 ||
          year.getFullYear() > Number(value.padStart(4, "20"))
        ) {
          setIsCreditCardChecked(
            "Expiry year is invalid, it cannot be in the past"
          );
          if (ref) ref.focus();
          return true;
        }
        break;
      }

      case "cvc":
        if (value.length !== 3) {
          setIsCreditCardChecked("CVC is invalid");
          if (ref) ref.focus();
          return true;
        }
        break;

      default:
        return true;
    }

    setIsCreditCardChecked(false);
    return false;
  };

  return {
    verifyName,
    verifyLastName,
    verifyEmail,
    verifyMessage,
    verifyCreditCard,
    isNameChecked,
    isLastNameChecked,
    isEmailChecked,
    isMessageChecked,
    isCreditCardChecked,
  };
};

export default useValidation;
