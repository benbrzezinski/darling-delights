import { Link, useLocation } from "react-router-dom";
import { CollectionDetailsHeadingType } from "../../types";
import useIcons from "../../hooks/useIcons";
import scss from "./CollectionDetailsHeading.module.scss";

const CollectionDetailsHeading = ({
  bgImg,
  title,
  text,
}: CollectionDetailsHeadingType) => {
  const { pathname } = useLocation();
  const { Lower, Greater } = useIcons();

  return (
    <div
      className={scss.background}
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className={`container ${scss.wrapper}`}>
        <section className={scss.heading}>
          <h1 className={scss.title}>{title}</h1>
          <p className={scss.text}>{text}</p>
          <div className={scss.linkBox}>
            <button
              className={scss.btn}
              type="button"
              disabled={pathname.includes("summer")}
            >
              <Link to="/collections/summer" className={scss.link}>
                <Lower className={scss.icon} />
              </Link>
            </button>
            <button
              className={scss.btn}
              type="button"
              disabled={pathname.includes("spring")}
            >
              <Link to="/collections/spring" className={scss.link}>
                <Greater className={scss.icon} />
              </Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollectionDetailsHeading;
