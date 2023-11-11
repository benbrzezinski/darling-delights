import { useState } from "react";

const useValidation = () => {
  const [isNameChecked, setIsNameChecked] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isMessageChecked, setIsMessageChecked] = useState(false);
  const [isPaymentMethodChecked, setIsPaymentMethodChecked] = useState(false);

  const verifyName = (name: string) => {
    if (!name.match(/^[A-Za-z\s]+$/)) {
      setIsNameChecked(true);
      return false;
    }

    setIsNameChecked(false);
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

  const verifyCreditCard = (value: string) => {
    if (
      !value.match(
        /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)/
      )
    ) {
      setIsPaymentMethodChecked(true);
      return false;
    }

    setIsPaymentMethodChecked(false);
    return true;
  };

  const verifyBlik = (value: string) => {
    if (!value.match(/^[0-9]{6}$/)) {
      setIsPaymentMethodChecked(true);
      return false;
    }

    setIsPaymentMethodChecked(false);
    return true;
  };

  return {
    verifyName,
    verifyEmail,
    verifyMessage,
    verifyCreditCard,
    verifyBlik,
    isNameChecked,
    isEmailChecked,
    isMessageChecked,
    isPaymentMethodChecked,
  };
};

export default useValidation;
