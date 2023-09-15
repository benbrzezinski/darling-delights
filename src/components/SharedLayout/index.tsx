import Lottie from "lottie-react";
import { useState, useEffect, Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import useIcons from "../../hooks/useIcons";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";
import scrollUp from "../../json/scroll-up.json";
import scss from "./SharedLayout.module.scss";

const SharedLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const { Close } = useIcons();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (isMobileMenuOpen && isSmallScreen) {
      return disableBodyScroll(document.body);
    }

    if (!isSmallScreen) {
      return enableBodyScroll(document.body);
    }
  }, [isMobileMenuOpen, isSmallScreen]);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setIsTop(true) : setIsTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMobileMenu = () => {
    disableBodyScroll(document.body);
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    enableBodyScroll(document.body);
    setIsMobileMenuOpen(false);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header isSmallScreen={isSmallScreen} openMobileMenu={openMobileMenu} />
      <main>
        <Suspense fallback={<Loader />}>
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
      <Lottie
        animationData={scrollUp}
        className={
          isTop ? `${scss.scrollUp} ${scss.notVisible}` : scss.scrollUp
        }
        onClick={handleScroll}
      />
    </>
  );
};

export default SharedLayout;
