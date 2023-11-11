import { Helmet } from "react-helmet-async";
import { FeedbackPlacement } from "../types/enums";
import ProductDetailsNav from "../components/ProductDetailsNav";
import ProductDetails from "../components/ProductDetails";
import Description from "../components/Description";
import OurAdvantages from "../components/OurAdvantages";
import Suggestions from "../components/Suggestions";
import Feedbacks from "../components/Feedbacks";
import feedbacks from "../db/fake-feedbacks";
import BasketInfo from "../components/BasketInfo";

const ShopDetails = () => {
  const feedbacksShop = feedbacks.filter(
    ({ placement }) => placement === FeedbackPlacement.Shop
  );

  return (
    <>
      <Helmet>
        <title>Darling Delights - Product</title>
      </Helmet>
      <ProductDetailsNav />
      <ProductDetails />
      <Description />
      <OurAdvantages />
      <Suggestions />
      <Feedbacks feedbacks={feedbacksShop} />
      <BasketInfo />
    </>
  );
};

export default ShopDetails;
