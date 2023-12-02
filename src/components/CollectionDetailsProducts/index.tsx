import { Link } from "react-router-dom";
import { Product } from "../../types";
import Notification from "../Notification";
import scss from "./CollectionDetailsProducts.module.scss";

const CollectionDetailsProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className={scss.wrapper}>
      {products.length > 0 ? (
        <ul className={scss.products}>
          {products.map(({ id, name, price, img }, i) => (
            <li
              className={i === 4 ? scss.bigProductsItem : scss.productsItem}
              key={id}
            >
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
          ))}
        </ul>
      ) : (
        <Notification text="Sorry, no products were found" />
      )}
    </div>
  );
};

export default CollectionDetailsProducts;
