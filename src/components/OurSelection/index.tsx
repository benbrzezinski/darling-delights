import { Link } from "react-router-dom";
import { products } from "../../db/fake-products";
import { ProductPlacement } from "../../types/enums";
import scss from "./OurSelection.module.scss";

const OurSelection = () => {
  const selectionProducts = products.filter(
    ({ placement }) => placement === ProductPlacement.Selection
  );

  return (
    <div className={scss.background}>
      <div className={scss.wrapper}>
        <section className={scss.headline}>
          <h2 className={scss.title}>Our Selection of Jewelry</h2>
          <p className={scss.text}>
            Explore our diverse range of handcrafted jewelry that combines
            elegance and charm. From classic designs to contemporary favorites,
            our collection has something for every taste
          </p>
          <Link to="shop" className={scss.shopBtn}>
            Shop now
          </Link>
        </section>
        <ul className={scss.products}>
          {selectionProducts.map(({ id, name, price, img }) => (
            <li className={scss.productsItem} key={id}>
              <Link to={`shop/${id}`}>
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
    </div>
  );
};

export default OurSelection;
