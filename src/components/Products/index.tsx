import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Pagination from "../Pagination";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Products.module.scss";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredProducts } = useProducts();
  const { Ring } = useIcons();

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
                <Link to={id}>
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
          <Pagination
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : filteredProducts.length > 0 ? (
        <>
          <ul className={scss.products}>
            {filteredProducts.map(({ id, name, price, img }, i) => (
              <li
                className={i === 8 ? scss.bigProductsItem : scss.productsItem}
                key={id}
              >
                <Link to={id}>
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
          <Pagination
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <div className={scss.infoBox}>
          <h2 className={scss.infoText}>Sorry, there are no products</h2>
          <Ring className={scss.ring} />
        </div>
      )}
    </div>
  );
};

export default Products;
