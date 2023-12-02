import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Favourites } from "../../types";
import { toggleFavourites, resetFavourites } from "../../redux/products/slice";
import Notification from "../Notification";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Favourites.module.scss";

const Favourites = ({
  isFavouritesOpen,
  closeFavourites,
  closeFavouritesByBackdrop,
}: Favourites) => {
  const { favourites } = useProducts();
  const { Close, FavouritesHeartFull } = useIcons();
  const dispatch = useDispatch();

  const handleToggleFavourites = (id: string) => {
    if (id) dispatch(toggleFavourites(id));
  };

  const handleResetFavourites = () => {
    dispatch(resetFavourites());
  };

  return (
    <div
      className={
        isFavouritesOpen ? `${scss.backdrop} ${scss.isVisible}` : scss.backdrop
      }
      onClick={closeFavouritesByBackdrop}
    >
      <div
        className={
          isFavouritesOpen ? `${scss.wrapper} ${scss.visible}` : scss.wrapper
        }
      >
        <section
          className={scss.section}
          style={{ gap: favourites.length > 0 ? "60px" : "0px" }}
        >
          <h2 className={scss.title}>Favourites</h2>
          <button
            type="button"
            className={scss.closeBtn}
            onClick={closeFavourites}
          >
            <Close className={scss.closeIcon} />
          </button>
          {favourites.length > 0 ? (
            <>
              <button
                className={scss.clearAll}
                type="button"
                onClick={handleResetFavourites}
              >
                Clear All
              </button>
              <ul className={scss.favourites}>
                {favourites.map(({ id, img, name, code, price }) => (
                  <li className={scss.favouritesItem} key={id}>
                    <Link
                      to={{
                        pathname: `shop/${id}`,
                        search: "?from=basket&size=48&quantity=1",
                      }}
                      className={scss.favouritesLink}
                      onClick={closeFavourites}
                    >
                      <img
                        width={94}
                        height={94}
                        src={img}
                        alt={name}
                        className={scss.favouritesImg}
                        loading="lazy"
                      />
                      <div className={scss.favouritesProductInfoBox}>
                        <p className={scss.name}>{name}</p>
                        <p className={scss.code}>{code}</p>
                        <p className={scss.price}>${price}</p>
                      </div>
                    </Link>
                    <button
                      className={scss.favouritesBtn}
                      type="button"
                      onClick={() => handleToggleFavourites(id)}
                    >
                      <FavouritesHeartFull className={scss.favouritesIcon} />
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Notification
              text="You haven't added anything to your favourites"
              flexGrow={1}
              paddingTop="0"
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default Favourites;
