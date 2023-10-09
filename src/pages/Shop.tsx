import { Helmet } from "react-helmet-async";
import Searcher from "../components/Searcher";
import Filters from "../components/Filters";
import Products from "../components/Products";
import OurAdvantages from "../components/OurAdvantages";

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Shop</title>
      </Helmet>
      <Searcher />
      <Filters />
      <Products />
      <OurAdvantages />
    </>
  );
};

export default Shop;
