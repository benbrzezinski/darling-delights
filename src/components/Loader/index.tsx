import { Hourglass } from "react-loader-spinner";
import { Loader } from "../../types";
import scss from "./Loader.module.scss";

const Loader = ({ isVisible = true }: Loader) => {
  return (
    <>
      <Hourglass
        visible={isVisible}
        height="100"
        width="100"
        ariaLabel="hourglass-loading"
        wrapperClass={scss.loader}
        colors={["#6b4a09", "#f2c66d"]}
      />
      <div className={scss.spanDown}></div>
    </>
  );
};

export default Loader;
