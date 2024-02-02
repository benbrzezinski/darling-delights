import { useSelector } from "react-redux";
import { selectIsUserAllowed } from "../redux/auth/selectors";

const useAuth = () => {
  const isUserAllowed = useSelector(selectIsUserAllowed);

  return { isUserAllowed };
};

export default useAuth;
