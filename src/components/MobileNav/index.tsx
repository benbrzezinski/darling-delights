import { NavLink } from "react-router-dom";
import { MobileNavType } from "../../types";
import useIcons from "../../hooks/useIcons";
import scss from "./MobileNav.module.scss";

const MobileNav = ({ isMobileMenuOpen, closeMobileMenu }: MobileNavType) => {
  const { Close, Facebook, TikTok, Instagram, YouTube } = useIcons();

  return (
    <nav
      className={
        isMobileMenuOpen ? `${scss.navMobile} ${scss.visible}` : scss.navMobile
      }
    >
      <button type="button" className={scss.closeBtn} onClick={closeMobileMenu}>
        <Close className={scss.icon} />
      </button>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${scss.navItem} ${scss.isActiveMobile}` : scss.navItem
        }
        onClick={closeMobileMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="shop"
        className={({ isActive }) =>
          isActive ? `${scss.navItem} ${scss.isActiveMobile}` : scss.navItem
        }
        onClick={closeMobileMenu}
      >
        Shop
      </NavLink>
      <NavLink
        to="collections"
        className={({ isActive }) =>
          isActive ? `${scss.navItem} ${scss.isActiveMobile}` : scss.navItem
        }
        onClick={closeMobileMenu}
      >
        Collections
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? `${scss.navItem} ${scss.isActiveMobile}` : scss.navItem
        }
        onClick={closeMobileMenu}
      >
        About
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive ? `${scss.navItem} ${scss.isActiveMobile}` : scss.navItem
        }
        onClick={closeMobileMenu}
      >
        Contact
      </NavLink>
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
    </nav>
  );
};

export default MobileNav;
