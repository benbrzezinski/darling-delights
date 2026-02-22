import { Helmet } from "react-helmet-async";
import BasketSummary from "../components/BasketSummary";
import Suggestions from "../components/Suggestions";

const Basket = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Basket</title>
        <meta
          name="description"
          content="Review your selected jewelry in the Darling Delights basket and prepare for a seamless checkout experience."
        ></meta>
      </Helmet>
      <BasketSummary />
      <Suggestions />
    </>
  );
};

export default Basket;
