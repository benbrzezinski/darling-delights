import useIcons from "../../hooks/useIcons";
import scss from "./ContactInfo.module.scss";

const ContactInfo = () => {
  const { Envelope, Phone, FileText } = useIcons();

  return (
    <ul className={scss.infoList}>
      <li className={scss.infoItem}>
        <a
          href="mailto:darling.delights@email.com"
          className={scss.infoLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Envelope className={scss.icon} />
          darling.delights@email.com
        </a>
      </li>
      <li className={scss.infoItem}>
        <a href="tel:+48452783691" className={scss.infoLink}>
          <Phone className={scss.icon} />
          +48 452-783-691
        </a>
      </li>
      <li className={scss.infoItem}>
        <a href="tel:2025550161" className={scss.infoLink}>
          <FileText className={scss.icon} />
          (202) 555-0161
        </a>
      </li>
    </ul>
  );
};

export default ContactInfo;
