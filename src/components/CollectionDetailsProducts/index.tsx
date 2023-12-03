import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Product } from "../../types";
import { toggleFavourites } from "../../redux/products/slice";
import Notification from "../Notification";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./CollectionDetailsProducts.module.scss";

const CollectionDetailsProducts = ({ products }: { products: Product[] }) => {
  const { favourites } = useProducts();
  const { FavouritesHeartEmpty, FavouritesHeartFull } = useIcons();
  const dispatch = useDispatch();

  return (
    <div className={scss.wrapper}>
      {products.length > 0 ? (
        <ul className={scss.products}>
          {products.map(({ id, name, price, img }, i) => {
            const isInFavourites = favourites.find(
              product => product.id === id
            );

            return (
              <li
                className={i === 4 ? scss.bigProductsItem : scss.productsItem}
                key={id}
              >
                <div className={scss.favouritesBox}>
                  <button
                    className={scss.favouritesBtn}
                    type="button"
                    onClick={() => dispatch(toggleFavourites(id))}
                  >
                    {isInFavourites ? (
                      <FavouritesHeartFull className={scss.favouritesIcon} />
                    ) : (
                      <FavouritesHeartEmpty className={scss.favouritesIcon} />
                    )}
                  </button>
                </div>
                <Link
                  to={{
                    pathname: `/shop/${id}`,
                    search: "?from=collections&size=48&quantity=1",
                  }}
                >
                  <div className={scss.productImgBox}>
                    <img
                      width={i === 4 ? 576 : 276}
                      height={i === 4 ? 760 : 320}
                      src={img}
                      alt={name}
                      className={scss.productImg}
                      loading="lazy"
                    />
                  </div>
                  <div className={scss.productInfoBox}>
                    <p className={scss.productName}>{name}</p>
                    <p className={scss.productPrice}>${price}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <Notification text="Sorry, no products were found" />
      )}
    </div>
  );
};

export default CollectionDetailsProducts;
