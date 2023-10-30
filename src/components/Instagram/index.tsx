import scss from "./Instagram.module.scss";

const Instagram = () => {
  return (
    <div className={scss.wrapper}>
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
      <ul className={scss.products}>
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
      </ul>
    </div>
  );
};

export default Instagram;
