import {
  FormEventHandler,
  ChangeEventHandler,
  useState,
  useEffect,
} from "react";
import { useSearchParams } from "react-router-dom";
import useIcons from "../../hooks/useIcons";
import scss from "./Searcher.module.scss";

const Searcher = () => {
  const [searcherValue, setSearcherValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { Search } = useIcons();
  const searcherQuery = searchParams.get("q") ?? "";
  const page = searchParams.get("p") ? Number(searchParams.get("p")) : 1;

  useEffect(() => {
    setSearcherValue(searcherQuery);
  }, [searcherQuery]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (page !== 1) {
      searchParams.set("p", "1");
    }

    if (!searcherValue) {
      searchParams.delete("q");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set("q", searcherValue);
    setSearchParams(searchParams);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setSearcherValue(e.currentTarget.value);
  };

  return (
    <div className={scss.background}>
      <section className={`container ${scss.wrapper}`}>
        <h1 className={scss.title}>Our Products</h1>
        <form onSubmit={handleSubmit}>
          <div className={scss.searcherBox}>
            <input
              type="text"
              name="searcher"
              className={scss.searcher}
              onChange={handleChange}
              value={searcherValue}
              placeholder="Find jewelry you like"
              required
            />
            <button type="submit" className={scss.btn} title="Search">
              <Search className={scss.icon} />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Searcher;
