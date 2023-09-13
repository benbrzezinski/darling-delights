import { Link, NavLink } from "react-router-dom";
import { Header } from "../../types";
import useIcons from "../../hooks/useIcons";
import scss from "./Header.module.scss";

const Header = ({ isSmallScreen, openMobileMenu }: Header) => {
  const { Hamburger, User, ShoppingCart } = useIcons();

  return (
    <header className={scss.header}>
      <div className={scss.wrapper}>
        <div className={scss.logoBox}>
          <Link to="/" className={scss.logo}>
            Darling.
          </Link>
        </div>
        {isSmallScreen ? (
          <button
            type="button"
            className={scss.hamburgerBtn}
            onClick={openMobileMenu}
          >
            <Hamburger className={scss.icon} />
          </button>
        ) : (
          <nav className={scss.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${scss.navItem} ${scss.isActive}` : scss.navItem
              }
            >
              Home
            </NavLink>
            <NavLink
              to="shop"
              className={({ isActive }) =>
                isActive ? `${scss.navItem} ${scss.isActive}` : scss.navItem
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="collections"
              className={({ isActive }) =>
                isActive ? `${scss.navItem} ${scss.isActive}` : scss.navItem
              }
            >
              Collections
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? `${scss.navItem} ${scss.isActive}` : scss.navItem
              }
            >
              About
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? `${scss.navItem} ${scss.isActive}` : scss.navItem
              }
            >
              Contact
            </NavLink>
          </nav>
        )}
        <div className={scss.iconsBox}>
          <User className={scss.icon} />
          <ShoppingCart className={scss.icon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
