import { toast } from "react-toastify";

const useValidation = () => {
  const emailVerify = (email: string) => {
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      toast.error("Enter a valid e-mail");
      return false;
    }

    toast.success("Thank you for subscribing 🎉");
    return true;
  };

  return { emailVerify };
};

export default useValidation;
