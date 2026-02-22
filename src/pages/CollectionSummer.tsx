import { Helmet } from "react-helmet-async";
import { ProductPlacement } from "../types/enums";
import CollectionDetailsHeading from "../components/CollectionDetailsHeading";
import CollectionDetailsProducts from "../components/CollectionDetailsProducts";
import useProducts from "../hooks/useProducts";

const CollectionSummer = () => {
  const { products } = useProducts();

  const collectionProducts = products.filter(({ placement }) =>
    placement.includes(ProductPlacement.CollectionSummer),
  );

  return (
    <>
      <Helmet>
        <title>Darling Delights - Summer</title>
        <meta
          name="description"
          content="Explore Darling Delights Summer Collection: vibrant, elegant jewelry perfect for sunny days and stylish occasions."
        ></meta>
      </Helmet>
      <CollectionDetailsHeading
        bgImg="/assets/images/collection-7-big.jpg"
        title="Summer"
        text="Experience Sun-Kissed Elegance: Our Exquisite Summer Jewelry Collection - Embrace the Warmth and Glamour of Summertime with Incomparable Gracefulness"
        marginBottom={0}
      />
      <CollectionDetailsProducts products={collectionProducts} />
    </>
  );
};

export default CollectionSummer;
