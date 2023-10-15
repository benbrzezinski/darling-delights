import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Pagination from "../Pagination";
import Notification from "../Notification";
import usePage from "../../hooks/usePage";
import useProducts from "../../hooks/useProducts";
import scss from "./ShopProducts.module.scss";

const ShopProducts = () => {
  const { currentPage } = usePage();
  const { filteredProducts } = useProducts();
  const { pathname } = useLocation();

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1215px)" });
  const productsPerPage = isMediumScreen ? 12 : 13;

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  return (
    <div className={scss.wrapper}>
      {currentProducts.length > 0 ? (
        <>
          <ul className={scss.products}>
            {currentProducts.map(({ id, name, price, img }, i) => (
              <li
                className={i === 8 ? scss.bigProductsItem : scss.productsItem}
                key={id}
              >
                <Link to={id} state={{ from: pathname }}>
                  <img
                    width={i === 8 ? 576 : 276}
                    height={i === 8 ? 760 : 320}
                    src={img}
                    alt={name}
                    className={scss.productImg}
                    loading="lazy"
                  />
                  <div className={scss.productInfoBox}>
                    <p className={scss.productName}>{name}</p>
                    <p className={scss.productPrice}>${price}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination productsPerPage={productsPerPage} />
        </>
      ) : filteredProducts.length > 0 ? (
        <>
          <ul className={scss.products}>
            {filteredProducts.map(({ id, name, price, img }, i) => (
              <li
                className={i === 8 ? scss.bigProductsItem : scss.productsItem}
                key={id}
              >
                <Link to={id} state={{ from: pathname }}>
                  <img
                    width={i === 8 ? 576 : 276}
                    height={i === 8 ? 760 : 320}
                    src={img}
                    alt={name}
                    className={scss.productImg}
                    loading="lazy"
                  />
                  <div className={scss.productInfoBox}>
                    <p className={scss.productName}>{name}</p>
                    <p className={scss.productPrice}>${price}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination productsPerPage={productsPerPage} />
        </>
      ) : (
        <Notification text="Sorry, no products were found" />
      )}
    </div>
  );
};

export default ShopProducts;
