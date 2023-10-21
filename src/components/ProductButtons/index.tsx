import useIcons from "../../hooks/useIcons";
import scss from "./ProductButtons.module.scss";

const ProductButtons = () => {
  const { AddShoppingCart } = useIcons();

  return (
    <div className={scss.paymentBox}>
      <button type="button" className={scss.paymentBtn}>
        <AddShoppingCart className={scss.icon} />
        Add to bag
      </button>
      <button type="button" className={`${scss.paymentBtn} ${scss.buyBtn}`}>
        Buy now
      </button>
    </div>
  );
};

export default ProductButtons;
