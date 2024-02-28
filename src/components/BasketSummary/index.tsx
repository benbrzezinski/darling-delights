import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { toggleInBasket } from "../../redux/products/slice";
import BasketPayment from "../BasketPayment";
import Notification from "../Notification";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./BasketSummary.module.scss";

const BasketSummary = () => {
  const { basket } = useProducts();
  const { Bin, EditPen } = useIcons();
  const dispatch = useDispatch();
  const isMediumScreen = useMediaQuery({ query: "(max-width: 872px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 664px)" });

  const handleToggleInBasket = (id: string) => {
    dispatch(toggleInBasket({ id }));
  };

  return (
    <div className={`container ${scss.wrapper}`}>
      {basket.length > 0 ? (
        <>
          <section className={scss.summary}>
            <h2 className={scss.title}>Order summary</h2>
            <ul
              className={scss.basketSummary}
              style={{
                paddingRight:
                  isSmallScreen && basket.length === 1 ? "0" : "8px",
              }}
            >
              {basket.map(({ id, img, name, code, price, size, quantity }) => (
                <li className={scss.basketSummaryItem} key={id}>
                  <img
                    width={120}
                    height={120}
                    src={img}
                    alt={name}
                    className={scss.basketSummaryImg}
                    loading="lazy"
                  />
                  {isMediumScreen ? (
                    <>
                      <div className={scss.basketSummaryInfoBox}>
                        <p className={scss.productName}>{name}</p>
                        <p className={scss.productInfo}>{code}</p>
                        <p className={scss.productInfo}>Size: {size}</p>
                        <p className={scss.productInfo}>Quantity: {quantity}</p>
                        <p className={scss.productPriceMedium}>${price}</p>
                      </div>
                      <div className={scss.iconBox}>
                        <Link
                          to={{
                            pathname: `/shop/${id}`,
                            search: `?from=basket&size=${size}&quantity=${quantity}`,
                          }}
                          className={scss.editLink}
                        >
                          <EditPen className={scss.editPen} />
                        </Link>
                        <button
                          type="button"
                          className={scss.binBtn}
                          onClick={() => handleToggleInBasket(id)}
                        >
                          <Bin className={scss.binIcon} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={scss.basketSummaryInfoBox}>
                        <p className={scss.productName}>{name}</p>
                        <p className={scss.productInfo}>{code}</p>
                        <p className={scss.productInfo}>Size: {size}</p>
                        <p className={scss.productInfo}>Quantity: {quantity}</p>
                      </div>
                      <p className={scss.productPrice}>${price}</p>
                      <div className={scss.iconBox}>
                        <Link
                          to={{
                            pathname: `/shop/${id}`,
                            search: `?from=basket&size=${size}&quantity=${quantity}`,
                          }}
                          className={scss.editLink}
                        >
                          <EditPen className={scss.editPen} />
                        </Link>
                        <button
                          type="button"
                          className={scss.binBtn}
                          onClick={() => handleToggleInBasket(id)}
                        >
                          <Bin className={scss.binIcon} />
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <BasketPayment />
        </>
      ) : (
        <Notification text="Oops, the basket is empty" />
      )}
    </div>
  );
};

export default BasketSummary;
