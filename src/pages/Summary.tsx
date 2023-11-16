import { Helmet } from "react-helmet-async";
import SummaryDetails from "../components/SummaryDetails";

const Summary = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Summary</title>
      </Helmet>
      <SummaryDetails />
    </>
  );
};

export default Summary;
