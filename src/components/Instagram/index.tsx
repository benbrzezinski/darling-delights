import { useState, useEffect, useRef } from "react";
import throttle from "lodash.throttle";
import instagram from "../../db/instagram";
import useIcons from "../../hooks/useIcons";
import scss from "./Instagram.module.scss";

const Instagram = () => {
  const THROTTLE_DELAY = 300;
  const [scrollState, setScrollState] = useState({
    isScrollAtLeftMost: true,
    isScrollAtRightMost: false,
  });
  const { Lower, Greater } = useIcons();
  const productsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (productsRef.current) {
        const isScrollAtLeftMost = productsRef.current.scrollLeft === 0;
        const isScrollAtRightMost =
          productsRef.current.scrollLeft ===
          productsRef.current.scrollWidth - productsRef.current.clientWidth;

        setScrollState({
          isScrollAtLeftMost,
          isScrollAtRightMost,
        });
      }
    }, THROTTLE_DELAY);

    const currentProductsRef = productsRef.current;

    if (currentProductsRef) {
      currentProductsRef.addEventListener("scroll", handleScroll);

      return () => {
        currentProductsRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const goPrev = () => {
    if (productsRef.current) {
      productsRef.current.scrollBy({ top: 0, left: -280, behavior: "smooth" });
    }
  };

  const goNext = () => {
    if (productsRef.current) {
      productsRef.current.scrollBy({ top: 0, left: 280, behavior: "smooth" });
    }
  };

  return (
    <div className={`container ${scss.wrapper}`}>
      <section className={scss.heading}>
        <h2 className={scss.title}>Instagram</h2>
        <a
          href="https://www.instagram.com"
          className={scss.link}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          @darling
        </a>
      </section>
      <div style={{ position: "relative" }}>
        <button
          type="button"
          style={{ display: scrollState.isScrollAtLeftMost ? "none" : "grid" }}
          className={`${scss.controller} ${scss.prev}`}
          onClick={goPrev}
        >
          <Lower className={scss.arrow} />
        </button>
        <ul className={scss.products} ref={productsRef}>
          {instagram.map(({ id, src }) => (
            <li className={scss.productsItem} key={id}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  width={250}
                  height={250}
                  src={src}
                  alt="Image from Instagram"
                  className={scss.productImg}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          style={{ display: scrollState.isScrollAtRightMost ? "none" : "grid" }}
          className={`${scss.controller} ${scss.next}`}
          onClick={goNext}
        >
          <Greater className={scss.arrow} />
        </button>
      </div>
    </div>
  );
};

export default Instagram;
