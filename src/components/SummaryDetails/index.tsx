import { useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { customAlphabet } from "nanoid";
import { resetBasket } from "../../redux/products/slice";
import { LocationState } from "../../types";
import Notification from "../Notification";
import useIcons from "../../hooks/useIcons";
import scss from "./SummaryDetails.module.scss";

const SummaryDetails = () => {
  const [searchParams] = useSearchParams();
  const { Calendar, Customer, PaymentMethod, Receipt, Dollar, AddressCard } =
    useIcons();
  const dispatch = useDispatch();
  const state = useLocation().state as LocationState;
  const isSmallScreen = useMediaQuery({ query: "(max-width: 664px)" });
  const orderNumber = customAlphabet("0123456789", 10);

  useEffect(() => {
    dispatch(resetBasket());
  }, [dispatch]);

  const addDaysAndFormatDate = (daysToAdd: number) => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + daysToAdd);

    const day = String(futureDate.getDate()).padStart(2, "0");
    const month = String(futureDate.getMonth() + 1).padStart(2, "0");
    const year = String(futureDate.getFullYear());

    return `${day}/${month}/${year}`;
  };

  return (
    <div className={scss.wrapper}>
      {state?.basket ? (
        <>
          <img
            className={scss.summaryImg}
            src="https://i.ibb.co/rGyDwQF/summary-1.jpg"
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
                <p className={scss.summaryText}>
                  {searchParams.get("delivery") === "home"
                    ? addDaysAndFormatDate(14)
                    : addDaysAndFormatDate(7)}
                </p>
              </li>
              <li className={scss.summaryItem}>
                <div className={scss.summaryBox}>
                  <Customer className={scss.summaryIcon} />
                  <p className={scss.summaryName}>Customer</p>
                </div>
                <p className={scss.summaryText}>{state.fullName}</p>
              </li>
              <li className={scss.summaryItem}>
                <div className={scss.summaryBox}>
                  <PaymentMethod className={scss.summaryIcon} />
                  <p className={scss.summaryName}>Payment Method</p>
                </div>
                <p
                  className={scss.summaryBgImg}
                  style={{
                    backgroundImage:
                      searchParams.get("payment") === "credit"
                        ? "url(assets/images/creditCard.png)"
                        : "url(assets/svgs/blik.svg)",
                  }}
                ></p>
              </li>
              <li className={scss.summaryItem}>
                <div className={scss.summaryBox}>
                  <Receipt className={scss.summaryIcon} />
                  <p className={scss.summaryName}>Order Number</p>
                </div>
                <p className={scss.summaryText}>{orderNumber()}</p>
              </li>
              <li className={scss.summaryItem}>
                <div className={scss.summaryBox}>
                  <Dollar className={scss.summaryIcon} />
                  <p className={scss.summaryName}>Total</p>
                </div>
                <p className={scss.summaryText}>${state.total}</p>
              </li>
              <li className={scss.summaryItem}>
                <div className={scss.summaryBox}>
                  <AddressCard className={scss.summaryIcon} />
                  <p className={scss.summaryName}>Delivery Address</p>
                </div>
                <div className={scss.summaryAddressBox}>
                  <p className={scss.summaryText}>{state.country}</p>
                  <p className={scss.summaryText}>{state.state}</p>
                  <p className={scss.summaryText}>
                    {state.zipCode}, {state.city}
                  </p>
                  <p className={scss.summaryText}>
                    {state.street}, {state.houseNumber}
                  </p>
                </div>
              </li>
            </ul>
            <p className={scss.summaryText}>Order Line</p>
            <ul
              className={scss.basketSummary}
              style={{
                paddingRight:
                  isSmallScreen && state.basket.length === 1 ? "0" : "8px",
              }}
            >
              {state.basket.map(
                ({ id, img, name, code, price, size, quantity }) => (
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
                      <p className={scss.productQuantity}>x{quantity}</p>
                    </div>
                    <p className={scss.productPrice}>${price}</p>
                  </li>
                )
              )}
            </ul>
            <div className={scss.shopBtnBox}>
              <Link to="/shop" className={scss.shopBtn}>
                Continue shopping
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Notification text="There is nothing interesting here" paddingTop="0" />
      )}
    </div>
  );
};

export default SummaryDetails;
