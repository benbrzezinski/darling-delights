import Lottie from "lottie-react";
import { useState, useEffect, Suspense, MouseEvent } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import throttle from "lodash.throttle";
import Header from "../../components/Header";
import Basket from "../../components/Basket";
import MobileNav from "../../components/MobileNav";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import scrollToValue from "../../utils/scrollToValue";
import scrollUp from "../../json/scroll-up.json";
import scss from "./SharedLayout.module.scss";

const SharedLayout = () => {
  const THROTTLE_DELAY = 300;
  const [isTop, setIsTop] = useState(true);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (isBasketOpen || (isMobileMenuOpen && isSmallScreen)) {
      return disableBodyScroll(document.body);
    }

    if (!isBasketOpen || !isMobileMenuOpen || !isSmallScreen) {
      return enableBodyScroll(document.body);
    }
  }, [isBasketOpen, isMobileMenuOpen, isSmallScreen]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsTop(window.scrollY === 0);
    }, THROTTLE_DELAY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeBasketByBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setIsBasketOpen(false);
    }
  };

  const handleScrollTop = () => {
    scrollToValue(0);
  };

  return (
    <>
      <Header
        isSmallScreen={isSmallScreen}
        openMobileMenu={() => setIsMobileMenuOpen(true)}
        openBasket={() => setIsBasketOpen(true)}
      />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Basket
        isBasketOpen={isBasketOpen}
        closeBasket={() => setIsBasketOpen(false)}
        closeBasketByBackdrop={closeBasketByBackdrop}
      />
      {isSmallScreen ? (
        <MobileNav
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
        />
      ) : null}
      <Lottie
        animationData={scrollUp}
        className={
          isTop ? `${scss.scrollUp} ${scss.notVisible}` : scss.scrollUp
        }
        onClick={handleScrollTop}
      />
      <ToastContainer position="top-center" />
    </>
  );
};

export default SharedLayout;
