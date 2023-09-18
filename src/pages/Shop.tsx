import { Helmet } from "react-helmet-async";
import Searcher from "../components/Searcher";

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Shop</title>
      </Helmet>
      <Searcher />
    </>
  );
};

export default Shop;
