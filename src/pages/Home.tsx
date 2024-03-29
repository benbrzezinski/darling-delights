import { Helmet } from "react-helmet-async";
import { FeedbackPlacement } from "../types/enums";
import Heading from "../components/Heading";
import OurAdvantages from "../components/OurAdvantages";
import FeaturedProducts from "../components/FeaturedProducts";
import OurCollections from "../components/OurCollections";
import OurSelection from "../components/OurSelection";
import OurStory from "../components/OurStory";
import Feedbacks from "../components/Feedbacks";
import feedbacks from "../db/feedbacks";

const Home = () => {
  const feedbacksHome = feedbacks.filter(
    ({ placement }) => placement === FeedbackPlacement.Home
  );

  return (
    <>
      <Helmet>
        <title>Darling Delights</title>
      </Helmet>
      <Heading />
      <OurAdvantages />
      <FeaturedProducts />
      <OurCollections />
      <OurSelection />
      <OurStory />
      <Feedbacks feedbacks={feedbacksHome} />
    </>
  );
};

export default Home;
