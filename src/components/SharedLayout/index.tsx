import { Link, NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import useIcons from "../../hooks/useIcons";
import scss from "./SharedLayout.module.scss";

const SharedLayout = () => {
  const { User, ShoppingCart } = useIcons();

  return (
    <>
      <header className={scss.header}>
        <div className={scss.container}>
          <div className={scss.wrapper}>
            <Link to="/" className={scss.logo}>
              Darling.
            </Link>
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
            <div className={scss.iconsBox}>
              <User className={scss.icon} />
              <ShoppingCart className={scss.icon} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={scss.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default SharedLayout;
