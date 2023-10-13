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
      </Helmet>
      <Searcher />
      <Filters />
      <ShopProducts />
      <OurAdvantages />
    </>
  );
};

export default Shop;
