import Lottie from "lottie-react";
import { useState, useEffect, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import throttle from "lodash.throttle";
import Header from "../Header";
import MobileNav from "../MobileNav";
import Footer from "../Footer";
import Loader from "../Loader";
import scrollUp from "../../json/scroll-up.json";
import scss from "./SharedLayout.module.scss";

const SharedLayout = () => {
  const THROTTLE_DELAY = 300;
  const [isTop, setIsTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (isMobileMenuOpen && isSmallScreen) {
      return disableBodyScroll(document.body);
    }

    if (!isMobileMenuOpen || !isSmallScreen) {
      return enableBodyScroll(document.body);
    }
  }, [isMobileMenuOpen, isSmallScreen]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsTop(window.scrollY === 0);
    }, THROTTLE_DELAY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
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
        <MobileNav
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
        />
      ) : null}
      <Lottie
        animationData={scrollUp}
        className={
          isTop ? `${scss.scrollUp} ${scss.notVisible}` : scss.scrollUp
        }
        onClick={scrollTop}
      />
      <ToastContainer position="top-center" />
    </>
  );
};

export default SharedLayout;
