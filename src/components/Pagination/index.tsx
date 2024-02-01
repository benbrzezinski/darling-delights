import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { PaginationType } from "../../types";
import { setPage } from "../../redux/page/slice";
import scrollToValue from "../../utils/scrollToValue";
import usePage from "../../hooks/usePage";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Pagination.module.scss";

const Pagination = ({ productsPerPage }: PaginationType) => {
  const { currentPage } = usePage();
  const { filteredProducts } = useProducts();
  const { Greater, Lower } = useIcons();
  const initialRender = useRef(true);
  const dispatch = useDispatch();

  const quantityOfPages = Math.ceil(filteredProducts.length / productsPerPage);
  const pages: number[] = [];

  for (let i = 1; i <= quantityOfPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (quantityOfPages) dispatch(setPage(1));
  }, [quantityOfPages, filteredProducts.length, dispatch]);

  return pages.length > 0 ? (
    <ul className={scss.pagination}>
      {currentPage !== pages[0] ? (
        <li className={scss.paginationItem} key={nanoid()}>
          <button
            type="button"
            className={scss.paginationBtn}
            onClick={() => {
              dispatch(setPage(currentPage - 1));
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
              dispatch(setPage(page));
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
              dispatch(setPage(currentPage + 1));
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
