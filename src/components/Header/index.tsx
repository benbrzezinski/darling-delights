import { Link, NavLink, useLocation } from "react-router-dom";
import { HeaderType } from "../../types";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Header.module.scss";

const Header = ({
  isSmallScreen,
  openMobileMenu,
  openBasket,
  openFavourites,
}: HeaderType) => {
  const { pathname } = useLocation();
  const { basket, favourites } = useProducts();
  const { Hamburger, Location, User, ShoppingCart, FavouritesHeartEmpty } =
    useIcons();

  return (
    <header className={scss.header}>
      <div className={`container ${scss.wrapper}`}>
        <div className={scss.logoBox}>
          <Link to="/" className={scss.logo}>
            Darling.
          </Link>
        </div>
        {isSmallScreen ? (
          <button type="button" className={scss.btn} onClick={openMobileMenu}>
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
          <NavLink
            to="/location"
            className={({ isActive }) =>
              isActive ? scss.isIconActive : undefined
            }
          >
            <Location className={`${scss.icon} ${scss.symbol}`} />
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive || pathname === "/registration"
                ? scss.isIconActive
                : undefined
            }
          >
            <User className={`${scss.icon} ${scss.symbol}`} />
          </NavLink>
          <button type="button" className={scss.btn} onClick={openBasket}>
            <ShoppingCart className={scss.icon} />
            {basket.length > 0 ? (
              <p className={scss.quantityInfo}>{basket.length}</p>
            ) : null}
          </button>
          <button type="button" className={scss.btn} onClick={openFavourites}>
            <FavouritesHeartEmpty className={`${scss.icon} ${scss.symbol}`} />
            {favourites.length > 0 ? (
              <p className={scss.quantityInfo}>{favourites.length}</p>
            ) : null}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
