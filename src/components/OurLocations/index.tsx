import Selects from "../Selects";
import Notification from "../Notification";
import useSelectsPropsStore from "../../hooks/useSelectsPropsStore";
import scss from "./OurLocations.module.scss";

const OurLocations = () => {
  const { options, handleSelect, handleValue, selectedStore } =
    useSelectsPropsStore();

  const storeAddress = selectedStore.split(", ").join(",").replace(/\s+/g, "+");

  return (
    <div className={`container ${scss.wrapper}`}>
      <section className={scss.section}>
        <h1 className={scss.title}>Find Us</h1>
        <Selects
          options={options}
          handleSelect={handleSelect}
          handleValue={handleValue}
          width="100%"
        />
      </section>
      {storeAddress ? (
        <iframe
          className={scss.map}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBfuppggPYVh6yoi0Mkc8x32eQNXcM7fOQ&q=${storeAddress}`}
        ></iframe>
      ) : (
        <Notification
          text="Please select the desired store address to view"
          paddingTop={0}
        />
      )}
    </div>
  );
};

export default OurLocations;
