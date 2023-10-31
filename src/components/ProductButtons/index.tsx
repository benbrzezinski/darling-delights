import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleInBasket } from "../../redux/products/slice";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./ProductButtons.module.scss";

const ProductButtons = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { AddShoppingCart } = useIcons();
  const dispatch = useDispatch();

  const isInBasket = products.find(product => product.id === id)?.inBasket;

  const handleToggleInBasket = () => {
    if (id) dispatch(toggleInBasket(id));
  };

  return (
    <div className={scss.paymentBox}>
      <button
        type="button"
        className={scss.paymentBtn}
        onClick={handleToggleInBasket}
      >
        <AddShoppingCart className={scss.icon} />
        {isInBasket ? "Remove from bag" : "Add to bag"}
      </button>
      <button type="button" className={`${scss.paymentBtn} ${scss.buyBtn}`}>
        Buy now
      </button>
    </div>
  );
};

export default ProductButtons;
