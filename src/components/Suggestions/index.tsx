import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import throttle from "lodash.throttle";
import { toggleFavourites } from "../../redux/products/slice";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Suggestions.module.scss";

const Suggestions = () => {
  const THROTTLE_DELAY = 300;
  const { id } = useParams();
  const [scrollState, setScrollState] = useState({
    isScrollAtLeftMost: true,
    isScrollAtRightMost: false,
  });
  const { products, favourites } = useProducts();
  const { FavouritesHeartEmpty, FavouritesHeartFull, Lower, Greater } =
    useIcons();
  const productsRef = useRef<HTMLUListElement>(null);
  const dispatch = useDispatch();
  const location = useLocation();

  const product = products.find(product => product.id === id);
  const suggestedProducts = products.filter(
    ({ id, type }) => id !== product?.id && type === product?.type
  );

  useEffect(() => {
    if (productsRef.current) {
      productsRef.current.scrollLeft = 0;
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (productsRef.current) {
        const isScrollAtLeftMost = productsRef.current.scrollLeft === 0;
        const isScrollAtRightMost =
          productsRef.current.scrollLeft ===
          productsRef.current.scrollWidth - productsRef.current.clientWidth;

        setScrollState({
          isScrollAtLeftMost,
          isScrollAtRightMost,
        });
      }
    }, THROTTLE_DELAY);

    const currentProductsRef = productsRef.current;

    if (currentProductsRef) {
      currentProductsRef.addEventListener("scroll", handleScroll);

      return () => {
        currentProductsRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const goPrev = () => {
    if (productsRef.current) {
      productsRef.current.scrollBy({ top: 0, left: -306, behavior: "smooth" });
    }
  };

  const goNext = () => {
    if (productsRef.current) {
      productsRef.current.scrollBy({ top: 0, left: 306, behavior: "smooth" });
    }
  };

  return product && suggestedProducts.length > 0 ? (
    <section className={`container ${scss.wrapper}`}>
      <div className={scss.headlineBox}>
        <h2 className={scss.headline}>You may also like</h2>
        <Link to="/shop" className={scss.link}>
          View more
        </Link>
      </div>
      <div style={{ position: "relative" }}>
        <button
          type="button"
          style={{ display: scrollState.isScrollAtLeftMost ? "none" : "grid" }}
          className={`${scss.controller} ${scss.prev}`}
          onClick={goPrev}
        >
          <Lower className={scss.arrow} />
        </button>
        <ul className={scss.products} ref={productsRef}>
          {suggestedProducts.map(({ id, name, price, img }) => {
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
        <button
          type="button"
          style={{ display: scrollState.isScrollAtRightMost ? "none" : "grid" }}
          className={`${scss.controller} ${scss.next}`}
          onClick={goNext}
        >
          <Greater className={scss.arrow} />
        </button>
      </div>
    </section>
  ) : (
    <section className={`container ${scss.wrapper}`}>
      <div className={scss.headlineBox}>
        <h2 className={scss.headline}>You may also like</h2>
        <Link to="/shop" className={scss.link}>
          View more
        </Link>
      </div>
      <div style={{ position: "relative" }}>
        <button
          type="button"
          style={{ display: scrollState.isScrollAtLeftMost ? "none" : "grid" }}
          className={`${scss.controller} ${scss.prev}`}
          onClick={goPrev}
        >
          <Lower className={scss.arrow} />
        </button>
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
        <button
          type="button"
          style={{ display: scrollState.isScrollAtRightMost ? "none" : "grid" }}
          className={`${scss.controller} ${scss.next}`}
          onClick={goNext}
        >
          <Greater className={scss.arrow} />
        </button>
      </div>
    </section>
  );
};

export default Suggestions;
