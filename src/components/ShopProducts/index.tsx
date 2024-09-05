import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { toggleFavourites } from "../../redux/products/slice";
import Pagination from "../Pagination";
import Notification from "../Notification";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./ShopProducts.module.scss";

const ShopProducts = () => {
  const FIRST_PAGE = 1;
  const LAST_PAGE = 4;
  const [searchParams] = useSearchParams();
  const { filteredProducts, favourites } = useProducts();
  const { FavouritesHeartEmpty, FavouritesHeartFull } = useIcons();
  const dispatch = useDispatch();
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1215px)" });

  const paramsPage = searchParams.get("p") ? Number(searchParams.get("p")) : 1;
  const currentPage =
    isNaN(paramsPage) || paramsPage < FIRST_PAGE || paramsPage > LAST_PAGE
      ? 1
      : paramsPage;

  const productsPerPage = isMediumScreen ? 12 : 13;
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  return (
    <div className={`container ${scss.wrapper}`}>
      {currentProducts.length > 0 ? (
        <>
          <ul className={scss.products}>
            {currentProducts.map(({ id, name, price, img }, i) => {
              const isInFavourites = favourites.find(
                product => product.id === id
              );

              return (
                <li
                  className={i === 8 ? scss.bigProductsItem : scss.productsItem}
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
                      pathname: id,
                      search: "?from=shop&size=48&quantity=1",
                    }}
                  >
                    <div className={scss.productImgBox}>
                      <img
                        width={i === 8 ? 576 : 276}
                        height={i === 8 ? 760 : 320}
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
          <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
          />
        </>
      ) : filteredProducts.length > 0 ? (
        <>
          <ul className={scss.products}>
            {filteredProducts.map(({ id, name, price, img }, i) => {
              const isInFavourites = favourites.find(
                product => product.id === id
              );

              return (
                <li
                  className={i === 8 ? scss.bigProductsItem : scss.productsItem}
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
                      pathname: id,
                      search: "?from=shop&size=48&quantity=1",
                    }}
                  >
                    <div className={scss.productImgBox}>
                      <img
                        width={i === 8 ? 576 : 276}
                        height={i === 8 ? 760 : 320}
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
          <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
          />
        </>
      ) : (
        <Notification text="Sorry, no products were found" />
      )}
    </div>
  );
};

export default ShopProducts;
