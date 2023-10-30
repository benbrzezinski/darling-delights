import { useState } from "react";

const useValidation = () => {
  const [isNameChecked, setIsNameChecked] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isMessageChecked, setIsMessageChecked] = useState(false);

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
    if (!(message.split(" ").length >= 10)) {
      setIsMessageChecked(true);
      return false;
    }

    setIsMessageChecked(false);
    return true;
  };

  return {
    verifyName,
    verifyEmail,
    verifyMessage,
    isNameChecked,
    isEmailChecked,
    isMessageChecked,
  };
};

export default useValidation;
