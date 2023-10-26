import { Helmet } from "react-helmet-async";
import AboutHeading from "../components/AboutHeading";
import AboutOurStory from "../components/AboutOurStory";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - About</title>
      </Helmet>
      <AboutHeading />
      <AboutOurStory />
    </>
  );
};

export default About;
