import { useState, useEffect, useRef } from "react";
import throttle from "lodash.throttle";
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
          <li className={scss.productsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                width={250}
                height={250}
                src="https://i.ibb.co/ZL1j9KM/collection-7.jpg"
                alt="product image from Instagram"
                className={scss.productImg}
                loading="lazy"
              />
            </a>
          </li>
          <li className={scss.productsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                width={250}
                height={250}
                src="https://i.ibb.co/V3tGprs/about-4.jpg"
                alt="product image from Instagram"
                className={scss.productImg}
                loading="lazy"
              />
            </a>
          </li>
          <li className={scss.productsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                width={250}
                height={250}
                src="https://i.ibb.co/NTcQrWD/collection-13.jpg"
                alt="product image from Instagram"
                className={scss.productImg}
                loading="lazy"
              />
            </a>
          </li>
          <li className={scss.productsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                width={250}
                height={250}
                src="https://i.ibb.co/bRK6YBX/about-5.jpg"
                alt="product image from Instagram"
                className={scss.productImg}
                loading="lazy"
              />
            </a>
          </li>
          <li className={scss.productsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                width={250}
                height={250}
                src="https://i.ibb.co/FXqxgKT/collection-14.jpg"
                alt="product image from Instagram"
                className={scss.productImg}
                loading="lazy"
              />
            </a>
          </li>
          <li className={scss.productsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                width={250}
                height={250}
                src="https://i.ibb.co/bKDgk5Z/featured-product-1.jpg"
                alt="product image from Instagram"
                className={scss.productImg}
                loading="lazy"
              />
            </a>
          </li>
          <li className={scss.productsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                width={250}
                height={250}
                src="https://i.ibb.co/J2WW6N9/collection-1.jpg"
                alt="product image from Instagram"
                className={scss.productImg}
                loading="lazy"
              />
            </a>
          </li>
          <li className={scss.productsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                width={250}
                height={250}
                src="/assets/images/heading-2.jpg"
                alt="product image from Instagram"
                className={scss.productImg}
                loading="lazy"
              />
            </a>
          </li>
          <li className={scss.productsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                width={250}
                height={250}
                src="https://i.ibb.co/vvy6KXq/collection-12.jpg"
                alt="product image from Instagram"
                className={scss.productImg}
                loading="lazy"
              />
            </a>
          </li>
          <li className={scss.productsItem}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                width={250}
                height={250}
                src="https://i.ibb.co/SxBs6QY/collection-10.jpg"
                alt="product image from Instagram"
                className={scss.productImg}
                loading="lazy"
              />
            </a>
          </li>
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
