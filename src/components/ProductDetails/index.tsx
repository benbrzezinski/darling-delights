import { useParams } from "react-router-dom";
import Notification from "../Notification";
import useProducts from "../../hooks/useProducts";
import scss from "./ProductDetails.module.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find(product => product.id === id);

  return (
    <div className={scss.wrapper}>
      {product ? (
        <div className={scss.imagesBox}>
          <img
            src={product.img}
            alt={product.name}
            className={scss.productThumbnail}
            loading="lazy"
          />
          <div className={scss.imgBox}>
            <img
              src={product.img}
              alt={product.name}
              className={scss.productImg}
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <Notification text="Sorry, product was not found" />
      )}
    </div>
  );
};

export default ProductDetails;
