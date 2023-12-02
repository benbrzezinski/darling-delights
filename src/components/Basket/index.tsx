import { Link } from "react-router-dom";
import { Basket } from "../../types";
import Notification from "../Notification";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Basket.module.scss";

const Basket = ({
  isBasketOpen,
  closeBasket,
  closeBasketByBackdrop,
}: Basket) => {
  const { basket } = useProducts();
  const { Close, EditPen } = useIcons();

  const total = basket.reduce(
    (acc, { price, quantity }) => price * Number(quantity) + acc,
    0
  );

  return (
    <div
      className={
        isBasketOpen ? `${scss.backdrop} ${scss.isVisible}` : scss.backdrop
      }
      onClick={closeBasketByBackdrop}
    >
      <div
        className={
          isBasketOpen ? `${scss.wrapper} ${scss.visible}` : scss.wrapper
        }
      >
        <section className={scss.section}>
          <h2
            className={scss.title}
            style={{ marginBottom: basket.length > 0 ? "20px" : "0px" }}
          >
            Your basket
          </h2>
          <button type="button" className={scss.closeBtn} onClick={closeBasket}>
            <Close className={scss.closeIcon} />
          </button>
          {basket.length > 0 ? (
            <ul className={scss.basket}>
              {basket.map(({ id, img, name, code, price, size, quantity }) => (
                <li className={scss.basketItem} key={id}>
                  <img
                    width={94}
                    height={94}
                    src={img}
                    alt={name}
                    className={scss.basketImg}
                    loading="lazy"
                  />
                  <div className={scss.basketProductInfoBox}>
                    <p className={scss.name}>{name}</p>
                    <p className={scss.code}>{code}</p>
                    <p className={scss.price}>${price}</p>
                  </div>
                  <Link
                    to={{
                      pathname: `shop/${id}`,
                      search: `?from=basket&size=${size}&quantity=${
                        quantity || "1"
                      }`,
                    }}
                    className={scss.editLink}
                    onClick={closeBasket}
                  >
                    <EditPen className={scss.editPen} />
                  </Link>
                  <p className={scss.quantity}>x{quantity || "1"}</p>
                </li>
              ))}
            </ul>
          ) : (
            <Notification text="The basket is empty" paddingTop="0" />
          )}
          <div className={scss.basketInfoBox}>
            <div className={scss.totalBox}>
              <p className={scss.text}>Total: </p>
              <p className={scss.total}>${total.toFixed(2)}</p>
            </div>
            <Link to="/basket" className={scss.btn} onClick={closeBasket}>
              Continue to check out
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Basket;
