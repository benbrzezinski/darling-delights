import { useEffect, useRef } from "react";

interface AdvancedMarkerProps {
  map: google.maps.Map | null;
  position: google.maps.LatLngLiteral;
  title?: string;
}

const AdvancedMarker = ({ map, position, title }: AdvancedMarkerProps) => {
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  useEffect(() => {
    if (!map || !google.maps.marker?.AdvancedMarkerElement) return;

    const marker = new google.maps.marker.AdvancedMarkerElement({
      position,
      map,
      title,
    });

    markerRef.current = marker;

    return () => {
      marker.map = null;
    };
  }, [map, position, title]);

  return null;
};

export default AdvancedMarker;
