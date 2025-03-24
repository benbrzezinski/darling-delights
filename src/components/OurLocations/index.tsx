import {
  GoogleMap,
  type Libraries,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState, useCallback } from "react";
import Selects from "../Selects";
import Notification from "../Notification";
import useSelectsPropsStore from "../../hooks/useSelectsPropsStore";
import scss from "./OurLocations.module.scss";
import AdvancedMarker from "./AdvancedMarker";

const libraries: Libraries = ["marker"];
const mapId = "darling-delights-locations";

const OurLocations = () => {
  const { options, handleSelect, handleValue, selectedStore, coordinates } =
    useSelectsPropsStore();

  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBfuppggPYVh6yoi0Mkc8x32eQNXcM7fOQ",
    libraries,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMapInstance(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMapInstance(null);
  }, []);

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
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{ mapId }}
        >
          {mapInstance && (
            <AdvancedMarker
              map={mapInstance}
              position={coordinates}
              title="Darling Delights"
            />
          )}
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
