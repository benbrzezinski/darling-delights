import { Helmet } from "react-helmet-async";
import OurLocations from "../components/OurLocations";

const FindUs = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Find Us</title>
        <meta
          name="description"
          content="Find Darling Delights near you: store location, opening hours, and directions to explore our curated jewelry collection."
        ></meta>
      </Helmet>
      <OurLocations />
    </>
  );
};

export default FindUs;
