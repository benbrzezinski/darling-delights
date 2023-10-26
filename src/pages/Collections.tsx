import { Helmet } from "react-helmet-async";
import CollectionsHeading from "../components/CollectionsHeading";
import Summer from "../components/Summer";
import Spring from "../components/Spring";

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Collections</title>
      </Helmet>
      <CollectionsHeading />
      <Summer />
      <Spring />
    </>
  );
};

export default Collections;
