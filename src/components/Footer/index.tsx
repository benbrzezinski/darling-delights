import { FormEventHandler, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import useIcons from "../../hooks/useIcons";
import useValidation from "../../hooks/useValidation";
import scss from "./Footer.module.scss";

const Footer = () => {
  const ID = useRef({
    email: nanoid(),
    toastSuccess: nanoid(),
  });
  const { Envelope, TikTok, Facebook, Instagram, YouTube } = useIcons();
  const { verifyEmail, isEmailChecked } = useValidation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement;

    if (!verifyEmail(email.value.trim())) {
      return;
    }

    toast.success("Thank you for signing up 🎉", {
      toastId: ID.current.toastSuccess,
    });

    form.reset();
  };

  return (
    <footer className={scss.footer}>
      <div className={`container ${scss.wrapperUp}`}>
        <div>
          <Link to="/" className={scss.logo}>
            Darling.
          </Link>
        </div>
        <nav>
          <ul className={scss.navFooter}>
            <li>
              <Link to="shop" className={scss.footerLink}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="contact" className={scss.footerLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="collections" className={scss.footerLink}>
                Collections
              </Link>
            </li>
            <li>
              <a
                href="https://www.freeprivacypolicy.com/live/30f341ba-68c4-4cb5-b7ee-35439ff2e7fb"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={scss.footerLink}
              >
                Privacy
              </a>
            </li>
            <li>
              <Link to="about" className={scss.footerLink}>
                About
              </Link>
            </li>
            <li>
              <a
                href="https://www.freeprivacypolicy.com/live/30f341ba-68c4-4cb5-b7ee-35439ff2e7fb"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={scss.footerLink}
              >
                Terms
              </a>
            </li>
          </ul>
        </nav>
        <div className={scss.newsletterWrapper}>
          <h3 className={scss.newsletterTitle}>Subscribe to our newsletter</h3>
          <form className={scss.newsletterForm} onSubmit={handleSubmit}>
            <label htmlFor={ID.current.email} className={scss.newsletterLabel}>
              For product announcements and exclusive insights
            </label>
            <div className={scss.newsletterBox}>
              <Envelope className={scss.newsletterIcon} />
              <input
                type="email"
                name="email"
                id={ID.current.email}
                className={scss.newsletterInput}
                placeholder="Input your e-mail"
                required
              />
              <button type="submit" className={scss.newsletterBtn}>
                Subscribe
              </button>
            </div>
            {isEmailChecked && <p className={scss.emailError}>Invalid email</p>}
          </form>
        </div>
      </div>
      <div className={`container ${scss.wrapperDown}`}>
        <p className={scss.copyrightText}>
          © {new Date().getFullYear()} Darling, Inc.
        </p>
        <ul className={scss.socialMedia}>
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
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <TikTok className={scss.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Instagram className={scss.icon} />
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
