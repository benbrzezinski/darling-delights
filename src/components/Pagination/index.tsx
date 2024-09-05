import { useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { PaginationType } from "../../types";
import scrollToValue from "../../utils/scrollToValue";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Pagination.module.scss";

const Pagination = ({ currentPage, productsPerPage }: PaginationType) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filteredProducts } = useProducts();
  const { Greater, Lower } = useIcons();

  const quantityOfPages = Math.ceil(filteredProducts.length / productsPerPage);
  const pages = Array.from({ length: quantityOfPages }, (_, i) => i + 1);

  return pages.length > 0 ? (
    <ul className={scss.pagination}>
      {currentPage !== pages[0] ? (
        <li className={scss.paginationItem} key={nanoid()}>
          <button
            type="button"
            className={scss.paginationBtn}
            onClick={() => {
              searchParams.set("p", String(currentPage - 1));
              setSearchParams(searchParams);
              scrollToValue(500);
            }}
          >
            <Lower className={scss.iconLT} />
          </button>
        </li>
      ) : null}
      {pages.map(page => (
        <li
          className={
            currentPage === page
              ? scss.paginationItemCurrent
              : scss.paginationItem
          }
          key={nanoid()}
        >
          <button
            type="button"
            className={
              currentPage === page
                ? `${scss.paginationBtn} ${scss.current}`
                : scss.paginationBtn
            }
            onClick={() => {
              searchParams.set("p", String(page));
              setSearchParams(searchParams);
              scrollToValue(500);
            }}
          >
            {page}
          </button>
        </li>
      ))}
      {currentPage !== pages[pages.length - 1] ? (
        <li className={scss.paginationItem} key={nanoid()}>
          <button
            type="button"
            className={scss.paginationBtn}
            onClick={() => {
              searchParams.set("p", String(currentPage + 1));
              setSearchParams(searchParams);
              scrollToValue(500);
            }}
          >
            <Greater className={scss.iconGT} />
          </button>
        </li>
      ) : null}
    </ul>
  ) : null;
};

export default Pagination;
