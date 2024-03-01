import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleInBasket, addToBasket } from "../../redux/products/slice";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./ProductButtons.module.scss";

const ProductButtons = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const { basket } = useProducts();
  const { AddShoppingCart } = useIcons();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isInBasket = basket.find(product => product.id === id);

  const handleToggleInBasket = () => {
    if (id)
      dispatch(
        toggleInBasket({
          id,
          size: searchParams.get("size") ?? "48",
          quantity: searchParams.get("quantity") ?? "1",
        })
      );
  };

  const handleBuyNow = () => {
    const searchParamsData = {
      payment: searchParams.get("payment"),
      delivery: searchParams.get("delivery"),
      warranty: searchParams.get("warranty"),
      care: searchParams.get("care"),
    };

    const paymentParams = Object.entries(searchParamsData).reduce(
      (acc: string[], [key, value]) => {
        if (value) {
          acc.push(`${key}=${value}`);
        }

        return acc;
      },
      []
    );

    if (!isInBasket && id) {
      dispatch(
        addToBasket({
          id,
          size: searchParams.get("size") ?? "48",
          quantity: searchParams.get("quantity") ?? "1",
        })
      );
    }

    navigate(
      `/basket${paymentParams.length > 0 ? `?${paymentParams.join("&")}` : ""}`
    );
  };

  return (
    <div className={scss.paymentBox}>
      <button
        type="button"
        className={scss.basketBtn}
        onClick={handleToggleInBasket}
      >
        <AddShoppingCart className={scss.icon} />
        {isInBasket ? "Remove from bag" : "Add to bag"}
      </button>
      <button type="button" className={scss.buyBtn} onClick={handleBuyNow}>
        Buy now
      </button>
    </div>
  );
};

export default ProductButtons;
