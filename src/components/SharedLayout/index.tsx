import { useMediaQuery } from "react-responsive";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState, Suspense } from "react";
import useIcons from "../../hooks/useIcons";
import scss from "./SharedLayout.module.scss";

const SharedLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const { Hamburger, User, ShoppingCart } = useIcons();

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={scss.header}>
        <div className={scss.wrapper}>
          <div className={scss.logoBox}>
            <Link to="/" className={scss.logo}>
              Darling.
            </Link>
          </div>
          {isSmallScreen ? (
            <div className={scss.mobileMenuBox}>
              <button
                type="button"
                className={scss.hamburgerBtn}
                onClick={openMobileMenu}
              >
                <Hamburger className={scss.icon} />
              </button>
              {isMobileMenuOpen ? (
                <nav className={scss.navMobile}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? `${scss.navItem} ${scss.isActiveMobile}`
                        : scss.navItem
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="shop"
                    className={({ isActive }) =>
                      isActive
                        ? `${scss.navItem} ${scss.isActiveMobile}`
                        : scss.navItem
                    }
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    to="collections"
                    className={({ isActive }) =>
                      isActive
                        ? `${scss.navItem} ${scss.isActiveMobile}`
                        : scss.navItem
                    }
                  >
                    Collections
                  </NavLink>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      isActive
                        ? `${scss.navItem} ${scss.isActiveMobile}`
                        : scss.navItem
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      isActive
                        ? `${scss.navItem} ${scss.isActiveMobile}`
                        : scss.navItem
                    }
                  >
                    Contact
                  </NavLink>
                </nav>
              ) : null}
            </div>
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
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
      {isMobileMenuOpen ? (
        <div className={scss.backdrop} onClick={closeMobileMenu}></div>
      ) : null}
    </>
  );
};

export default SharedLayout;
