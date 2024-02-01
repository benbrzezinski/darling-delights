import { Link } from "react-router-dom";
import scss from "./Summer.module.scss";

const Summer = () => {
  return (
    <div className={`container ${scss.wrapper}`}>
      <div className={scss.headingBox}>
        <section className={scss.heading}>
          <h2 className={scss.title}>Summer</h2>
          <p className={scss.text}>
            Step into a World of Sun-Kissed Elegance and Effortless Style with
            Our Uniquely Crafted Summer Jewelry Collection - Where Every Piece
            Radiates the Essence of the Season and Invites You to Embrace the
            Warmth, Beauty, and Splendor of Summertime with Unparalleled Grace
            and Glamour
          </p>
          <Link to="summer" className={scss.link}>
            View Collection
          </Link>
        </section>
        <img
          src="https://i.ibb.co/ZL1j9KM/collection-7.jpg"
          alt="collection image"
          width={570}
          height={456}
          className={scss.img}
          loading="lazy"
        />
      </div>
      <div className={scss.imagesBox}>
        <img
          src="https://i.ibb.co/zQCLKfM/collection-6.jpg"
          alt="collection image"
          width={368}
          height={460}
          className={scss.img}
          loading="lazy"
        />
        <img
          src="https://i.ibb.co/NTcQrWD/collection-13.jpg"
          alt="collection image"
          width={368}
          height={460}
          className={scss.img}
          loading="lazy"
        />
        <img
          src="https://i.ibb.co/G0Z16FK/collection-5.jpg"
          alt="collection image"
          width={368}
          height={460}
          className={scss.img}
          loading="lazy"
        />
        <img
          src="https://i.ibb.co/LNrTNFg/collection-3.jpg"
          alt="collection image"
          width="100%"
          className={`${scss.img} ${scss.span}`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Summer;
