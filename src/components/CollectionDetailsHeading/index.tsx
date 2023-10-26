import { Link } from "react-router-dom";
import { CollectionDetailsHeading } from "../../types";
import useIcons from "../../hooks/useIcons";
import scss from "./CollectionDetailsHeading.module.scss";

const CollectionDetailsHeading = ({
  bgImg,
  title,
  text,
}: CollectionDetailsHeading) => {
  const { Lower, Greater } = useIcons();

  return (
    <div
      className={scss.background}
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className={scss.wrapper}>
        <section className={scss.heading}>
          <h1 className={scss.title}>{title}</h1>
          <p className={scss.text}>{text}</p>
          <div className={scss.linkBox}>
            <Link to="/collections/summer" className={scss.link}>
              <Lower className={scss.icon} />
            </Link>
            <Link to="/collections/spring" className={scss.link}>
              <Greater className={scss.icon} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollectionDetailsHeading;
