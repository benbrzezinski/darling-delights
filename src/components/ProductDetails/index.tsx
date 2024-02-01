import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleFavourites } from "../../redux/products/slice";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Size from "../Size";
import Quantity from "../Quantity";
import ProductButtons from "../ProductButtons";
import ProductSelects from "../ProductSelects";
import Notification from "../Notification";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./ProductDetails.module.scss";

const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const { id } = useParams();
  const { products, favourites } = useProducts();
  const { FavouritesHeartEmpty, FavouritesHeartFull } = useIcons();
  const dispatch = useDispatch();

  const colorNameRef = useRef<HTMLParagraphElement | null>(null);
  const product = products.find(product => product.id === id);
  const isInFavourites = favourites.find(product => product.id === id);

  const closeShowColor = () => {
    setShowColor(false);
    document.removeEventListener("click", closeShowColor);
  };

  const toggleShowColor = () => {
    if (showColor) {
      setShowColor(false);
      document.removeEventListener("click", closeShowColor);
      return;
    }

    setShowColor(true);
    setTimeout(() => {
      document.addEventListener("click", closeShowColor);
    }, 0);
  };

  const handleToggleFavourites = () => {
    if (id) dispatch(toggleFavourites(id));
  };

  return product ? (
    <div className={`container ${scss.wrapper}`}>
      <div className={scss.imagesBox}>
        <img
          src={product.img}
          alt={product.name}
          className={scss.productThumbnail}
          loading="lazy"
        />
        <div>
          <div className={scss.imgBox}>
            <div className={scss.favouritesBox}>
              <button
                className={scss.favouritesBtn}
                type="button"
                onClick={handleToggleFavourites}
              >
                {isInFavourites ? (
                  <FavouritesHeartFull className={scss.favouritesIcon} />
                ) : (
                  <FavouritesHeartEmpty className={scss.favouritesIcon} />
                )}
              </button>
            </div>
            <img
              src={product.img}
              alt={product.name}
              className={scss.productImg}
              onClick={() => setOpen(true)}
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
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: product.img, alt: product.name }]}
        plugins={[Counter, Thumbnails, Fullscreen, Zoom]}
      />
    </div>
  ) : (
    <Notification text="Sorry, product was not found" />
  );
};

export default ProductDetails;
