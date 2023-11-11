import { Helmet } from "react-helmet-async";
import BasketSummary from "../components/BasketSummary";
import Suggestions from "../components/Suggestions";

const Basket = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Basket</title>
      </Helmet>
      <BasketSummary />
      <Suggestions />
    </>
  );
};

export default Basket;
