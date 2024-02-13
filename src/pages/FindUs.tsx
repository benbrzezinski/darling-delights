import { Helmet } from "react-helmet-async";
import OurLocations from "../components/OurLocations";

const FindUs = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Find Us</title>
      </Helmet>
      <OurLocations />
    </>
  );
};

export default FindUs;
