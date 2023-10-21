import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { ProductPlacement } from "../../types/enums";
import scss from "./FeaturedProducts.module.scss";

const FeaturedProducts = () => {
  const { products } = useProducts();

  const featuredProducts = products.filter(({ placement }) =>
    placement.includes(ProductPlacement.Featured)
  );

  return (
    <div className={scss.wrapper}>
      <section className={scss.headline}>
        <h2 className={scss.title}>Featured Products</h2>
        <p className={scss.text}>
          Discover our carefully curated collection of stunning jewelry pieces
          that radiate elegance and sophistication. Explore now and find your
          perfect adornment
        </p>
        <Link to="shop" className={scss.shopBtn}>
          Shop now
        </Link>
      </section>
      <ul className={scss.products}>
        {featuredProducts.map(({ id, name, price, img }) => (
          <li className={scss.productsItem} key={id}>
            <Link
              to={{ pathname: `shop/${id}`, search: "?size=48&quantity=1" }}
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
    </div>
  );
};

export default FeaturedProducts;
