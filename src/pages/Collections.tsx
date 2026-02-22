import { Helmet } from "react-helmet-async";
import CollectionsHeading from "../components/CollectionsHeading";
import Summer from "../components/Summer";
import Spring from "../components/Spring";

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Collections</title>
        <meta
          name="description"
          content="Browse Darling Delights collections featuring diamonds, gemstones, and unique jewelry pieces designed for every occasion."
        ></meta>
      </Helmet>
      <CollectionsHeading />
      <Summer />
      <Spring />
    </>
  );
};

export default Collections;
