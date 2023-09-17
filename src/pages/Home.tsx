import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import OurAdvantages from "../components/OurAdvantages";
import FeaturedProducts from "../components/FeaturedProducts";
import OurCollections from "../components/OurCollections";
import OurSelection from "../components/OurSelection";
import OurStory from "../components/OurStory";
import Feedbacks from "../components/Feedbacks";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights</title>
      </Helmet>
      <Hero />
      <OurAdvantages />
      <FeaturedProducts />
      <OurCollections />
      <OurSelection />
      <OurStory />
      <Feedbacks />
    </>
  );
};

export default Home;
