import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductPlacement } from "../../types/enums";
import { toggleFavourites } from "../../redux/products/slice";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./OurSelection.module.scss";

const OurSelection = () => {
  const { products, favourites } = useProducts();
  const { FavouritesHeartEmpty, FavouritesHeartFull } = useIcons();
  const dispatch = useDispatch();

  const selectionProducts = products.filter(({ placement }) =>
    placement.includes(ProductPlacement.Selection)
  );

  return (
    <div className={scss.background}>
      <div className={`container ${scss.wrapper}`}>
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
          {selectionProducts.map(({ id, name, price, img }) => {
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
                  to={{ pathname: `shop/${id}`, search: "?size=48&quantity=1" }}
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
      </div>
    </div>
  );
};

export default OurSelection;
