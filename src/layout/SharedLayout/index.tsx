import Lottie from "lottie-react";
import { useState, useEffect, Suspense, MouseEvent } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, Zoom } from "react-toastify";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import throttle from "lodash.throttle";
import Header from "../../components/Header";
import Basket from "../../components/Basket";
import Favourites from "../../components/Favourites";
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
  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 950px)" });

  useEffect(() => {
    if (isMobileMenuOpen && isSmallScreen) {
      disableBodyScroll(document.body);
      return;
    }

    if (!isMobileMenuOpen || !isSmallScreen) {
      enableBodyScroll(document.body);
    }
  }, [isMobileMenuOpen, isSmallScreen]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsTop(window.scrollY < 1000);
    }, THROTTLE_DELAY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openBasket = () => {
    setIsBasketOpen(true);

    if (!isSmallScreen) {
      disableBodyScroll(document.body);
    }
  };

  const closeBasket = () => {
    setIsBasketOpen(false);

    if (!isSmallScreen) {
      enableBodyScroll(document.body);
    }
  };

  const closeBasketByBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setIsBasketOpen(false);

      if (!isSmallScreen) {
        enableBodyScroll(document.body);
      }
    }
  };

  const openFavourites = () => {
    setIsFavouritesOpen(true);

    if (!isSmallScreen) {
      disableBodyScroll(document.body);
    }
  };

  const closeFavourites = () => {
    setIsFavouritesOpen(false);

    if (!isSmallScreen) {
      enableBodyScroll(document.body);
    }
  };

  const closeFavouritesByBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setIsFavouritesOpen(false);

      if (!isSmallScreen) {
        enableBodyScroll(document.body);
      }
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
        openBasket={openBasket}
        openFavourites={openFavourites}
      />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Basket
        isBasketOpen={isBasketOpen}
        closeBasket={closeBasket}
        closeBasketByBackdrop={closeBasketByBackdrop}
      />
      <Favourites
        isFavouritesOpen={isFavouritesOpen}
        closeFavourites={closeFavourites}
        closeFavouritesByBackdrop={closeFavouritesByBackdrop}
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
      <ToastContainer
        className={scss.toastContainer}
        bodyClassName={scss.toastBody}
        autoClose={10000}
        draggablePercent={50}
        limit={3}
        transition={Zoom}
        closeOnClick
      />
    </>
  );
};

export default SharedLayout;
