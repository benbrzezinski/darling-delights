import Lottie from "lottie-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import throttle from "lodash.throttle";
import mouseScrolling from "../../json/mouse-scrolling.json";
import scss from "./Heading.module.scss";

const Heading = () => {
  const THROTTLE_DELAY = 300;
  const [isTop, setIsTop] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const isMediumScreen = useMediaQuery({ query: "(min-width: 951px)" });

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsTop(window.scrollY === 0);
    }, THROTTLE_DELAY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollDown = () => {
    if (heroRef.current) {
      window.scrollTo({
        top: heroRef.current.offsetHeight + 72,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={scss.hero} ref={heroRef}>
      <div className={`container ${scss.wrapper}`}>
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
      {isMediumScreen ? (
        <Lottie
          animationData={mouseScrolling}
          className={isTop ? scss.mouse : `${scss.mouse} ${scss.notVisible}`}
          onClick={scrollDown}
        />
      ) : null}
    </div>
  );
};

export default Heading;
