import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Size from "../Size";
import Quantity from "../Quantity";
import ProductButtons from "../ProductButtons";
import ProductSelects from "../ProductSelects";
import Notification from "../Notification";
import useProducts from "../../hooks/useProducts";
import scss from "./ProductDetails.module.scss";

const ProductDetails = () => {
  const [showColor, setShowColor] = useState(false);
  const { id } = useParams();
  const { products } = useProducts();

  const colorNameRef = useRef<HTMLParagraphElement | null>(null);
  const product = products.find(product => product.id === id);

  const toggleShowColor = () => {
    setShowColor(prev => !prev);
  };

  return product ? (
    <div className={scss.wrapper}>
      <div className={scss.imagesBox}>
        <img
          src={product.img}
          alt={product.name}
          className={scss.productThumbnail}
          loading="lazy"
        />
        <div>
          <div className={scss.imgBox}>
            <img
              src={product.img}
              alt={product.name}
              className={scss.productImg}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className={scss.detailsBox}>
        <section>
          <h2 className={scss.name}>{product.name}</h2>
          <p className={scss.code}>Code: {product.code}</p>
        </section>
        <p className={scss.price}>${product.price}</p>
        <div>
          <p className={scss.colorName} ref={colorNameRef}>
            Color - {product.color.name}
          </p>
          <button
            type="button"
            className={scss.color}
            style={{ backgroundColor: `${product.color.hex}` }}
            onClick={toggleShowColor}
          >
            <div
              className={
                showColor
                  ? `${scss.fullColor} ${scss.isVisible}`
                  : scss.fullColor
              }
              style={{
                backgroundColor: `${product.color.hex}`,
                left: colorNameRef.current
                  ? colorNameRef.current.offsetWidth + 20
                  : 200,
              }}
            ></div>
          </button>
        </div>
        <Size />
        <Quantity />
        <ProductButtons />
        <ProductSelects />
      </div>
    </div>
  ) : (
    <Notification text="Sorry, product was not found" />
  );
};

export default ProductDetails;
