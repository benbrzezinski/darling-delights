import {
  useSearchParams,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
  const { search } = useLocation();
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
    const indexOfPaymentParams = searchParams.get("from")
      ? search.indexOf("&", 28)
      : search.indexOf("&", 18);

    const paymentParams =
      indexOfPaymentParams !== -1
        ? `?${search.slice(indexOfPaymentParams + 1)}`
        : "";

    if (!isInBasket && id) {
      dispatch(
        addToBasket({
          id,
          size: searchParams.get("size") ?? "48",
          quantity: searchParams.get("quantity") ?? "1",
        })
      );
    }

    navigate(`/basket${paymentParams}`);
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
