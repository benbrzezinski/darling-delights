import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import useProducts from "../../hooks/useProducts";
import scss from "./Suggestions.module.scss";

const Suggestions = () => {
  const { id } = useParams();
  const { products } = useProducts();
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
        {suggestedProducts.map(({ id, name, price, img }) => (
          <li className={scss.productsItem} key={id}>
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
        ))}
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
          .map(({ id, name, price, img }) => (
            <li className={scss.productsItem} key={id}>
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
          ))}
      </ul>
    </section>
  );
};

export default Suggestions;
