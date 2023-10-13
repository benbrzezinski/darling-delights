import { Link, useParams, useLocation } from "react-router-dom";
import { LocationState } from "../../types";
import useIcons from "../../hooks/useIcons";
import useProducts from "../../hooks/useProducts";
import scss from "./ProductDetailsNav.module.scss";

const ProductDetailsNav = () => {
  const { id } = useParams();
  const { Greater } = useIcons();
  const { products } = useProducts();

  const location = useLocation();
  const locationState = location?.state as LocationState;
  const product = products.find(product => product.id === id);

  return (
    <ul className={scss.productNav}>
      <li>
        <Link to="/" className={scss.productNavLink}>
          Home
        </Link>
      </li>
      <li>
        <Greater className={scss.icon} />
      </li>
      {locationState.from !== "/" ? (
        <>
          <li>
            <Link
              to={locationState.from}
              className={scss.productNavLink}
            >{`${locationState.from
              .slice(1, 2)
              .toLocaleUpperCase()}${locationState.from.slice(2)}`}</Link>
          </li>
          <li>
            <Greater className={scss.icon} />
          </li>
        </>
      ) : null}
      <li>
        <Link
          to={location.pathname}
          state={locationState}
          className={scss.productNavLink}
        >
          {product && product.name}
        </Link>
      </li>
    </ul>
  );
};

export default ProductDetailsNav;
