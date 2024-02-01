import { NavLink } from "react-router-dom";
import { MobileNavType } from "../../types";
import useIcons from "../../hooks/useIcons";
import scss from "./MobileNav.module.scss";

const MobileNav = ({ isMobileMenuOpen, closeMobileMenu }: MobileNavType) => {
  const { Close } = useIcons();

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
    </nav>
  );
};

export default MobileNav;
