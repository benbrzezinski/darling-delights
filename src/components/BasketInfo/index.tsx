import { MouseEventHandler } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeBasketInfo } from "../../redux/products/slice";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./BasketInfo.module.scss";

const BasketInfo = () => {
  const { id } = useParams();
  const { products, isBasketInfoOpen } = useProducts();
  const { Close } = useIcons();
  const dispatch = useDispatch();

  const product = products.find(product => product.id === id);

  const handleCloseBasketInfo = () => {
    dispatch(closeBasketInfo());
  };

  const handleCloseBasketInfoByBackdrop: MouseEventHandler<
    HTMLDivElement
  > = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeBasketInfo());
    }
  };

  return (
    <div
      className={
        isBasketInfoOpen ? `${scss.backdrop} ${scss.isVisible}` : scss.backdrop
      }
      onClick={handleCloseBasketInfoByBackdrop}
    >
      <section className={scss.section}>
        <div className={scss.headlineBox}>
          <h2 className={scss.title}>Added to the basket</h2>
          <button
            type="button"
            className={scss.closeBtn}
            onClick={handleCloseBasketInfo}
          >
            <Close className={scss.closeIcon} />
          </button>
        </div>
        {product ? (
          <>
            <p className={scss.productName}>{product.name}</p>
            <p className={scss.productInfo}>Size: {product.size}</p>
            <p className={scss.productInfo}>Quantity: {product.quantity}</p>
          </>
        ) : null}
        <div className={scss.infoBtnBox}>
          <button
            type="button"
            className={scss.infoBtn}
            onClick={handleCloseBasketInfo}
          >
            Continue shopping
          </button>
          <Link
            to="/basket"
            className={scss.basketBtn}
            onClick={handleCloseBasketInfo}
          >
            Proceed to basket
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BasketInfo;
