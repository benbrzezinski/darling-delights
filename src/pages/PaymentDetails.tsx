import { Helmet } from "react-helmet-async";
import PaymentDetailsForm from "../components/PaymentDetailsForm";

const PaymentDetails = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Payment</title>
        <meta
          name="description"
          content="Enter your payment details securely and complete your Darling Delights order with confidence and ease."
        ></meta>
      </Helmet>
      <PaymentDetailsForm />
    </>
  );
};

export default PaymentDetails;
