import { nanoid } from "nanoid";
import useProducts from "../../hooks/useProducts";
import useIcons from "../../hooks/useIcons";
import scss from "./Pagination.module.scss";

const Pagination = ({
  productsPerPage,
  currentPage,
  setCurrentPage,
}: {
  productsPerPage: 13;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => {
  const { filteredProducts } = useProducts();
  const { Greater, Lower } = useIcons();
  const pages: number[] = [];

  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / productsPerPage);
    i++
  ) {
    pages.push(i);
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
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
              setCurrentPage(currentPage - 1);
              scrollTop();
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
              scrollTop();
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
              setCurrentPage(currentPage + 1);
              scrollTop();
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
