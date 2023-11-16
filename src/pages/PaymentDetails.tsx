import { Helmet } from "react-helmet-async";
import PaymentDetailsForm from "../components/PaymentDetailsForm";

const PaymentDetails = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Payment</title>
      </Helmet>
      <PaymentDetailsForm />
    </>
  );
};

export default PaymentDetails;
