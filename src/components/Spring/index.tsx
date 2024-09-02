import { Link } from "react-router-dom";
import scss from "./Spring.module.scss";

const Spring = () => {
  return (
    <div className={`container ${scss.wrapper}`}>
      <div className={scss.headingBox}>
        <img
          src="/assets/images/collection-9.jpg"
          alt="collection image"
          width={570}
          height={342}
          className={scss.headingImg}
          loading="lazy"
        />
        <section className={scss.heading}>
          <h2 className={scss.title}>Spring</h2>
          <p className={scss.text}>
            Embark on a Journey of Renewal and Fresh Beginnings with Our
            Exquisite Spring Jewelry Collection - Where Each Piece Blossoms with
            the Spirit of the Season, Awakening Your Senses to the Delicate
            Beauty, Vibrant Colors, and the Promise of New Adventures, All
            Captured in Every Meticulously Crafted Gem
          </p>
          <Link to="spring" className={scss.link}>
            View Collection
          </Link>
        </section>
      </div>
      <div className={scss.imagesBox}>
        <img
          src="/assets/images/collection-10.jpg"
          alt="collection image"
          width={570}
          height={570}
          className={scss.img}
          loading="lazy"
        />
        <img
          src="/assets/images/collection-11.jpg"
          alt="collection image"
          width={570}
          height={570}
          className={scss.img}
          loading="lazy"
        />
        <img
          src="/assets/images/collection-12.jpg"
          alt="collection image"
          width="100%"
          className={`${scss.img} ${scss.span}`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Spring;
