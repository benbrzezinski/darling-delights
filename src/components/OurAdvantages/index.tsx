import useIcons from "../../hooks/useIcons";
import scss from "./OurAdvantages.module.scss";

const OurAdvantages = () => {
  const { Truck, Heart, PaymentSecure } = useIcons();

  return (
    <ul className={scss.advantages}>
      <li className={scss.advantagesItem}>
        <Truck className={scss.advantagesIcon} />
        <h3 className={scss.advantagesTitle}>Delivery</h3>
        <p className={scss.advantagesText}>
          Your satisfaction is our top priority. We offer fast and secure
          delivery services to ensure your purchases reach your doorstep
          promptly
        </p>
      </li>
      <li className={scss.advantagesItem}>
        <Heart className={scss.advantagesIcon} />
        <h3 className={scss.advantagesTitle}>Customer care</h3>
        <p className={scss.advantagesText}>
          We value your shopping experience. Our friendly and knowledgeable
          customer care team is here to assist you with any questions or
          concerns
        </p>
      </li>
      <li className={scss.advantagesItem}>
        <PaymentSecure className={scss.advantagesIcon} />
        <h3 className={scss.advantagesTitle}>Payment security</h3>
        <p className={scss.advantagesText}>
          Protecting your financial information is paramount. We employ
          state-of-the-art security measures to safeguard your payments
        </p>
      </li>
    </ul>
  );
};

export default OurAdvantages;
