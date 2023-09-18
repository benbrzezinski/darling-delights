import { useSelector, useDispatch } from "react-redux";
import { ChangeEventHandler } from "react";
import { selectSearcher } from "../../redux/searcher/selectors";
import { setSearcher } from "../../redux/searcher/slice";
import useIcons from "../../hooks/useIcons";
import scss from "./Searcher.module.scss";

const Searcher = () => {
  const searcher = useSelector(selectSearcher);
  const dispatch = useDispatch();
  const { Search } = useIcons();

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.currentTarget;
    dispatch(setSearcher(value));
  };

  return (
    <div className={scss.background}>
      <section className={scss.wrapper}>
        <h1 className={scss.title}>Our Products</h1>
        <div className={scss.searcherBox}>
          <input
            type="text"
            className={scss.searcher}
            value={searcher}
            onChange={handleChange}
            placeholder="Find jewelry you like"
          />
          <Search className={scss.icon} />
        </div>
      </section>
    </div>
  );
};

export default Searcher;
