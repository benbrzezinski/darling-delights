import { Helmet } from "react-helmet-async";
import SummaryTransactionDetails from "../components/SummaryTransactionDetails";

const Summary = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Summary</title>
        <meta
          name="description"
          content="Review your Darling Delights order summary before completing checkout, ensuring every jewelry choice is perfect."
        ></meta>
      </Helmet>
      <SummaryTransactionDetails />
    </>
  );
};

export default Summary;
