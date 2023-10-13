import { Helmet } from "react-helmet-async";
import ProductDetailsNav from "../components/ProductDetailsNav";
import ProductDetails from "../components/ProductDetails";

const ShopDetails = () => {
  return (
    <>
      <Helmet>
        <title>Darling Delights - Product</title>
      </Helmet>
      <ProductDetailsNav />
      <ProductDetails />
    </>
  );
};

export default ShopDetails;
