import { Helmet } from "react-helmet-async";
import Searcher from "../components/Searcher";
import Filters from "../components/Filters";
import ShopProducts from "../components/ShopProducts";
import OurAdvantages from "../components/OurAdvantages";

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Shop</title>
        <meta
          name="description"
          content="Explore the Darling Delights shop: diamonds, gemstones, and handcrafted jewelry pieces for every occasion."
        ></meta>
      </Helmet>
      <Searcher />
      <Filters />
      <ShopProducts />
      <OurAdvantages />
    </>
  );
};

export default Shop;
