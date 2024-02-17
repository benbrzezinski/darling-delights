import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Selects from "../Selects";
import Notification from "../Notification";
import useSelectsPropsStore from "../../hooks/useSelectsPropsStore";
import scss from "./OurLocations.module.scss";

const OurLocations = () => {
  const { options, handleSelect, handleValue, selectedStore, coordinates } =
    useSelectsPropsStore();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBfuppggPYVh6yoi0Mkc8x32eQNXcM7fOQ",
  });

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
      {selectedStore && isLoaded ? (
        <GoogleMap
          mapContainerClassName={scss.map}
          center={coordinates}
          zoom={15}
        >
          <MarkerF
            position={coordinates}
            label="Darling Delights"
            animation={google.maps.Animation.BOUNCE}
          />
        </GoogleMap>
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
{
  /* <iframe
          className={scss.map}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBfuppggPYVh6yoi0Mkc8x32eQNXcM7fOQ&q=${storeAddress}`}
        ></iframe> */
}
