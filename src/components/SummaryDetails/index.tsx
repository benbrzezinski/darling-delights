import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./SummaryDetails.module.scss";

const SummaryDetails = () => {
  const { basket } = useProducts();
  const { Calendar, Customer, PaymentMethod, Receipt, Dollar, AddressCard } =
    useIcons();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 664px)" });

  return (
    <div className={scss.wrapper}>
      <img
        className={scss.summaryImg}
        src="https://i.ibb.co/d0TBRXd/summary-1.jpg"
        alt="picture of unpacking a gift"
        width={300}
        height={300}
        loading="lazy"
      />
      <h1 className={scss.title}>Thank you for your purchase!</h1>
      <p className={scss.infoText}>
        You will receive an confirmation letter through your email
      </p>
      <div className={scss.summaryDetailsContainer}>
        <ul className={scss.summaryList}>
          <li className={scss.summaryItem}>
            <div className={scss.summaryBox}>
              <Calendar className={scss.summaryIcon} />
              <p className={scss.summaryName}>Estimated Delivery Time</p>
            </div>
            <p className={scss.summaryText}>12/12/2024</p>
          </li>
          <li className={scss.summaryItem}>
            <div className={scss.summaryBox}>
              <Customer className={scss.summaryIcon} />
              <p className={scss.summaryName}>Customer</p>
            </div>
            <p className={scss.summaryText}>John Miller</p>
          </li>
          <li className={scss.summaryItem}>
            <div className={scss.summaryBox}>
              <PaymentMethod className={scss.summaryIcon} />
              <p className={scss.summaryName}>Payment Method</p>
            </div>
            <p
              className={scss.summaryBgImg}
              style={{ backgroundImage: "url(assets/images/creditCard.png)" }}
            ></p>
          </li>
          <li className={scss.summaryItem}>
            <div className={scss.summaryBox}>
              <Receipt className={scss.summaryIcon} />
              <p className={scss.summaryName}>Order Number</p>
            </div>
            <p className={scss.summaryText}>45482357942385</p>
          </li>
          <li className={scss.summaryItem}>
            <div className={scss.summaryBox}>
              <Dollar className={scss.summaryIcon} />
              <p className={scss.summaryName}>Total</p>
            </div>
            <p className={scss.summaryText}>$125.25</p>
          </li>
          <li className={scss.summaryItem}>
            <div className={scss.summaryBox}>
              <AddressCard className={scss.summaryIcon} />
              <p className={scss.summaryName}>Delivery Address</p>
            </div>
            <div className={scss.summaryAddressBox}>
              <p className={scss.summaryText}>Poland</p>
              <p className={scss.summaryText}>Olsztyn, Warminsko-mazurskie</p>
              <p className={scss.summaryText}>11-320, Jeziorany</p>
              <p className={scss.summaryText}>Radostowo 17B</p>
            </div>
          </li>
        </ul>
        <p className={scss.summaryText}>Order Line</p>
        <ul
          className={scss.basketSummary}
          style={{
            paddingRight: isSmallScreen && basket.length === 1 ? "0" : "8px",
          }}
        >
          {basket.map(({ id, img, name, code, price, size, quantity }) => (
            <li className={scss.basketSummaryItem} key={id}>
              <img
                width={94}
                height={94}
                src={img}
                alt={name}
                className={scss.basketSummaryImg}
                loading="lazy"
              />
              <div className={scss.basketSummaryInfoBox}>
                <p className={scss.productName}>{name}</p>
                <p className={scss.productInfo}>{code}</p>
                <p className={scss.productInfo}>Size: {size}</p>
                <p className={scss.productInfo}>x{quantity || "1"}</p>
              </div>
              <p className={scss.productPrice}>${price}</p>
            </li>
          ))}
        </ul>
        <div className={scss.shopBtnBox}>
          <Link to="/shop" className={scss.shopBtn}>
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SummaryDetails;
