import { useDispatch } from "react-redux";
import { ChangeEventHandler } from "react";
import { setSearcher } from "../../redux/filters/slice";
import useFilters from "../../hooks/useFilters";
import useIcons from "../../hooks/useIcons";
import scss from "./Searcher.module.scss";

const Searcher = () => {
  const dispatch = useDispatch();
  const { searcher } = useFilters();
  const { Search } = useIcons();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.currentTarget;
    dispatch(setSearcher(value));
  };

  return (
    <div className={scss.background}>
      <section className={`container ${scss.wrapper}`}>
        <h1 className={scss.title}>Our Products</h1>
        <div className={scss.searcherBox}>
          <input
            type="text"
            className={scss.searcher}
            onChange={handleChange}
            value={searcher}
            placeholder="Find jewelry you like"
          />
          <Search className={scss.icon} />
        </div>
      </section>
    </div>
  );
};

export default Searcher;
