import { Hourglass } from "react-loader-spinner";
import { LoaderType } from "../../types";
import scss from "./Loader.module.scss";

const Loader = ({ isVisible = true }: LoaderType) => {
  return (
    <>
      <Hourglass
        visible={isVisible}
        height="100"
        width="100"
        ariaLabel="hourglass-loading"
        wrapperClass={scss.loader}
        colors={["var(--cl-14)", "var(--cl-3)"]}
      />
      <div className={scss.spanDown}></div>
    </>
  );
};

export default Loader;
