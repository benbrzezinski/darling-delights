import { Helmet } from "react-helmet-async";
import AboutHeading from "../components/AboutHeading";
import AboutOurStory from "../components/AboutOurStory";
import DesignProcess from "../components/DesignProcess";
import Designer from "../components/Designer";
import Instagram from "../components/Instagram";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - About</title>
      </Helmet>
      <AboutHeading />
      <AboutOurStory />
      <DesignProcess />
      <Designer />
      <Instagram />
    </>
  );
};

export default About;
