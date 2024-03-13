import { Helmet } from "react-helmet-async";
import SummaryTransactionDetails from "../components/SummaryTransactionDetails";

const Summary = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Summary</title>
      </Helmet>
      <SummaryTransactionDetails />
    </>
  );
};

export default Summary;
