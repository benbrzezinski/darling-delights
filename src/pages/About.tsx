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
