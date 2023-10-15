import { useSelector } from "react-redux";
import { selectCurrentPage } from "../redux/page/selectors";

const usePage = () => {
  const currentPage = useSelector(selectCurrentPage);

  return { currentPage };
};

export default usePage;
