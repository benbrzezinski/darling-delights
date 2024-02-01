import {
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import useIcons from "../../hooks/useIcons";
import useProducts from "../../hooks/useProducts";
import scss from "./ProductDetailsNav.module.scss";

const ProductDetailsNav = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const { Greater } = useIcons();
  const { products } = useProducts();

  const { pathname, search } = useLocation();
  const product = products.find(product => product.id === id);

  return (
    <ul className={`container ${scss.productNav}`}>
      <li>
        <Link to="/" className={scss.productNavLink}>
          Home
        </Link>
      </li>
      <li>
        <Greater className={scss.icon} />
      </li>
      {searchParams.get("from") ? (
        <>
          <li>
            <Link
              to={`/${searchParams.get("from")}`}
              className={scss.productNavLink}
            >
              {searchParams.get("from")}
            </Link>
          </li>
          <li>
            <Greater className={scss.icon} />
          </li>
        </>
      ) : null}
      <li>
        <Link to={pathname + search} className={scss.productNavLink}>
          {product ? product.name : "Not Found"}
        </Link>
      </li>
    </ul>
  );
};

export default ProductDetailsNav;
