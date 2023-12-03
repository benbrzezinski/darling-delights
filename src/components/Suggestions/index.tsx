import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { toggleFavourites } from "../../redux/products/slice";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Suggestions.module.scss";

const Suggestions = () => {
  const { id } = useParams();
  const { products, favourites } = useProducts();
  const { FavouritesHeartEmpty, FavouritesHeartFull } = useIcons();
  const dispatch = useDispatch();
  const location = useLocation();
  const productsRef = useRef<HTMLUListElement>(null);

  const product = products.find(product => product.id === id);
  const suggestedProducts = products.filter(
    ({ id, type }) => id !== product?.id && type === product?.type
  );

  useEffect(() => {
    if (productsRef.current) {
      productsRef.current.scrollLeft = 0;
    }
  }, [location.pathname]);

  return product && suggestedProducts.length > 0 ? (
    <section className={scss.wrapper}>
      <div className={scss.headlineBox}>
        <h2 className={scss.headline}>You may also like</h2>
        <Link to="/shop" className={scss.link}>
          View more
        </Link>
      </div>
      <ul className={scss.products} ref={productsRef}>
        {suggestedProducts.map(({ id, name, price, img }) => {
          const isInFavourites = favourites.find(product => product.id === id);

          return (
            <li className={scss.productsItem} key={id}>
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
                  search: "?from=shop&size=48&quantity=1",
                }}
              >
                <div className={scss.productImgBox}>
                  <img
                    width={276}
                    height={320}
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
    </section>
  ) : (
    <section className={scss.wrapper}>
      <div className={scss.headlineBox}>
        <h2 className={scss.headline}>You may also like</h2>
        <Link to="/shop" className={scss.link}>
          View more
        </Link>
      </div>
      <ul className={scss.products} ref={productsRef}>
        {products
          .filter((_, i) => i < 9)
          .map(({ id, name, price, img }) => {
            const isInFavourites = favourites.find(
              product => product.id === id
            );

            return (
              <li className={scss.productsItem} key={id}>
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
                    search: "?from=shop&size=48&quantity=1",
                  }}
                >
                  <div className={scss.productImgBox}>
                    <img
                      width={276}
                      height={320}
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
    </section>
  );
};

export default Suggestions;
