import { Helmet } from "react-helmet-async";
import { ProductPlacement } from "../types/enums";
import CollectionDetailsHeading from "../components/CollectionDetailsHeading";
import CollectionDetailsProducts from "../components/CollectionDetailsProducts";
import useProducts from "../hooks/useProducts";

const CollectionSpring = () => {
  const { products } = useProducts();

  const collectionProducts = products.filter(({ placement }) =>
    placement.includes(ProductPlacement.CollectionSpring)
  );

  return (
    <>
      <Helmet>
        <title>Darling Delights - Spring</title>
      </Helmet>
      <CollectionDetailsHeading
        bgImg={"https://i.ibb.co/DwwvH0R/collection-11-big.jpg"}
        title={"Spring"}
        text={
          "Explore the Essence of Renewal with Our Elegant Spring Jewelry Collection - Each Piece Blooms with the Season's Spirit, Enlivening Your Senses with Delicate Beauty"
        }
      />
      <CollectionDetailsProducts products={collectionProducts} />
    </>
  );
};

export default CollectionSpring;
