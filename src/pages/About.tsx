import { Helmet } from "react-helmet-async";
import AboutHeading from "../components/AboutHeading";
import AboutOurStory from "../components/AboutOurStory";
import DesignProcess from "../components/DesignProcess";
import Designers from "../components/Designers";
import Instagram from "../components/Instagram";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - About</title>
        <meta
          name="description"
          content="Learn about Darling Delights, our passion for fine jewelry, expert craftsmanship, and dedication to timeless elegance."
        ></meta>
      </Helmet>
      <AboutHeading />
      <AboutOurStory />
      <DesignProcess />
      <Designers />
      <Instagram />
    </>
  );
};

export default About;
