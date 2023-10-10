import { useEffect } from "react";
import { nanoid } from "nanoid";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Pagination.module.scss";

const Pagination = ({
  productsPerPage,
  currentPage,
  setCurrentPage,
}: {
  productsPerPage: 12 | 13;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => {
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

  const scrollTop = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return pages.length > 0 ? (
    <ul className={scss.pagination}>
      {currentPage !== pages[0] ? (
        <li className={scss.paginationItem} key={nanoid()}>
          <button
            type="button"
            className={scss.paginationBtn}
            onClick={() => {
              scrollTop();
              setCurrentPage(currentPage - 1);
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
              scrollTop();
              setCurrentPage(page);
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
              scrollTop();
              setCurrentPage(currentPage + 1);
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
