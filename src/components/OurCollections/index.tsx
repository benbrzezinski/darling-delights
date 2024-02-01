import { Link } from "react-router-dom";
import scss from "./OurCollections.module.scss";

const OurCollections = () => {
  return (
    <div className={`container ${scss.wrapper}`}>
      <h2 className={scss.title}>Our Collections</h2>
      <ul className={scss.collections}>
        <li className={`${scss.collectionsItem} ${scss.first}`}>
          <Link to="collections/summer" className={scss.collectionsLink}>
            <p className={scss.collectionsName}>Luxurious Lustre</p>
          </Link>
        </li>
        <li className={`${scss.collectionsItem} ${scss.sec}`}>
          <Link to="collections/spring" className={scss.collectionsLink}>
            <p className={scss.collectionsName}>Radiant Reflections</p>
          </Link>
        </li>
        <li className={`${scss.collectionsItem} ${scss.third}`}>
          <Link to="collections/summer" className={scss.collectionsLink}>
            <p className={scss.collectionsName}>Majestic Mementos</p>
          </Link>
        </li>
        <li className={`${scss.collectionsItem} ${scss.fourth}`}>
          <Link to="collections/spring" className={scss.collectionsLink}>
            <p className={scss.collectionsName}>Blissful Baubles</p>
          </Link>
        </li>
        <li className={`${scss.collectionsItem} ${scss.fifth}`}>
          <Link to="collections/summer" className={scss.collectionsLink}>
            <p className={scss.collectionsName}>Timeless Treasures</p>
          </Link>
        </li>
        <li className={`${scss.collectionsItem} ${scss.sixth}`}>
          <Link to="collections/spring" className={scss.collectionsLink}>
            <p className={scss.collectionsName}>Divine Diamonds</p>
          </Link>
        </li>
      </ul>
      <Link to="shop" className={scss.shopBtn}>
        Shop now
      </Link>
    </div>
  );
};

export default OurCollections;
