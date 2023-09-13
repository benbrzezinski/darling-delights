import { useMediaQuery } from "react-responsive";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import useIcons from "../../hooks/useIcons";
import Header from "../Header";
import Footer from "../Footer";
import scss from "./SharedLayout.module.scss";

const SharedLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { Close } = useIcons();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    isSmallScreen
      ? disableBodyScroll(document.body)
      : enableBodyScroll(document.body);
  }, [isSmallScreen]);

  const openMobileMenu = () => {
    disableBodyScroll(document.body);
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    enableBodyScroll(document.body);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Header isSmallScreen={isSmallScreen} openMobileMenu={openMobileMenu} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {isSmallScreen ? (
        <nav
          className={
            isMobileMenuOpen
              ? `${scss.navMobile} ${scss.visible}`
              : scss.navMobile
          }
        >
          <button
            type="button"
            className={scss.closeBtn}
            onClick={closeMobileMenu}
          >
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
      ) : null}
    </>
  );
};

export default SharedLayout;
