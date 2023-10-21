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

  return product ? (
    <section className={scss.wrapper}>
      <h2 className={scss.headline}>You may also like</h2>
      <ul className={scss.products} ref={productsRef}>
        {suggestedProducts.map(({ id, name, price, img }) => (
          <li className={scss.productsItem} key={id}>
            <Link
              to={{
                pathname: `/shop/${id}`,
                search: "?size=48&quantity=1",
              }}
            >
              <img
                width={276}
                height={320}
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
    </section>
  ) : null;
};

export default Suggestions;
