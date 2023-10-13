import { useEffect } from "react";
import { nanoid } from "nanoid";
import { Pagination } from "../../types";
import scrollToValue from "../../utils/scrollToValue";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Pagination.module.scss";

const Pagination = ({
  productsPerPage,
  currentPage,
  setCurrentPage,
}: Pagination) => {
  const { filteredProducts } = useProducts();
  const { Greater, Lower } = useIcons();

  const quantityOfPages = Math.ceil(filteredProducts.length / productsPerPage);
  const pages: number[] = [];

  for (let i = 1; i <= quantityOfPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    if (quantityOfPages) setCurrentPage(1);
  }, [quantityOfPages, filteredProducts.length, setCurrentPage]);

  return pages.length > 0 ? (
    <ul className={scss.pagination}>
      {currentPage !== pages[0] ? (
        <li className={scss.paginationItem} key={nanoid()}>
          <button
            type="button"
            className={scss.paginationBtn}
            onClick={() => {
              setCurrentPage(prev => prev - 1);
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
              setCurrentPage(page);
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
              setCurrentPage(prev => prev + 1);
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
