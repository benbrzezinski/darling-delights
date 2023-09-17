import { NavLink } from "react-router-dom";
import { MobileNav } from "../../types";
import useIcons from "../../hooks/useIcons";
import scss from "./MobileNav.module.scss";

const MobileNav = ({ isMobileMenuOpen, closeMobileMenu }: MobileNav) => {
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
      >
        Home
      </NavLink>
      <NavLink
        to="shop"
        className={({ isActive }) =>
          isActive ? `${scss.navItem} ${scss.isActiveMobile}` : scss.navItem
        }
      >
        Shop
      </NavLink>
      <NavLink
        to="collections"
        className={({ isActive }) =>
          isActive ? `${scss.navItem} ${scss.isActiveMobile}` : scss.navItem
        }
      >
        Collections
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? `${scss.navItem} ${scss.isActiveMobile}` : scss.navItem
        }
      >
        About
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive ? `${scss.navItem} ${scss.isActiveMobile}` : scss.navItem
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default MobileNav;
