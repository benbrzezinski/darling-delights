import { Link } from "react-router-dom";
import { useRef } from "react";
import { nanoid } from "nanoid";
import useIcons from "../../hooks/useIcons";
import scss from "./Footer.module.scss";

const Footer = () => {
  const newsletterId = useRef(nanoid());
  const { Envelope, Twitter, Facebook, LinkedIn, YouTube } = useIcons();

  return (
    <footer className={scss.footer}>
      <div className={scss.wrapperUp}>
        <div>
          <Link to="/" className={scss.logo}>
            Darling.
          </Link>
        </div>
        <nav className={scss.navFooter}>
          <Link to="shop" className={scss.footerLink}>
            Shop
          </Link>
          <Link to="contact" className={scss.footerLink}>
            Contact
          </Link>
          <Link to="collections" className={scss.footerLink}>
            Collections
          </Link>
          <a
            href="https://www.freeprivacypolicy.com/live/30f341ba-68c4-4cb5-b7ee-35439ff2e7fb"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={scss.footerLink}
          >
            Privacy
          </a>
          <Link to="about" className={scss.footerLink}>
            About
          </Link>
          <a
            href="https://www.freeprivacypolicy.com/live/30f341ba-68c4-4cb5-b7ee-35439ff2e7fb"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={scss.footerLink}
          >
            Terms
          </a>
        </nav>
        <div className={scss.newsletterWrapper}>
          <h3 className={scss.newsletterTitle}>Subscribe to our newsletter</h3>
          <form className={scss.newsletterForm}>
            <label
              htmlFor={newsletterId.current}
              className={scss.newsletterLabel}
            >
              For product announcements and exclusive insights
            </label>
            <div className={scss.newsletterBox}>
              <Envelope className={scss.newsletterIcon} />
              <input
                type="email"
                name="email"
                id={newsletterId.current}
                className={scss.newsletterInput}
                placeholder="Input your e-mail"
                required
              />
              <button type="submit" className={scss.newsletterBtn}>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={scss.wrapperDown}>
        <p className={scss.copyrightText}>© 2023 Darling, Inc.</p>
        <ul className={scss.socialMedia}>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Twitter className={scss.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Facebook className={scss.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LinkedIn className={scss.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <YouTube className={scss.icon} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
