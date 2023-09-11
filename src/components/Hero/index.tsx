import { Link } from "react-router-dom";
import scss from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={scss.hero}>
      <div className={scss.wrapper}>
        <section className={scss.heading}>
          <h1 className={scss.title}>
            Sparkle & Shine: Exquisite Elegance Unveiled
          </h1>
          <Link to="shop" className={scss.shopBtn}>
            Shop now
          </Link>
        </section>
        <div className={scss.images}>
          <div className={scss.imgFirst}></div>
          <div className={scss.imgSec}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
