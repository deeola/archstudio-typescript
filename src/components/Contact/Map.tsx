import React, { useEffect, useRef, useState } from "react";

interface IMap {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
}

interface IMarker {
  address: string;
  latitude: number;
  longitude: number;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;
type GoogleMarker = google.maps.Marker;

const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<GoogleMap>();
  const [marker, setMarker] = useState<IMarker>();

  const startMap = (): void => {
    if (!map) {
      defaultMapStart();
    }
  };

  useEffect(startMap, [map]);

  const defaultMapStart = (): void => {
    const defaultAddress = new google.maps.LatLng(52.520008, 13.404954);
    initMap(7, defaultAddress);
  };

  const initEventListener = (): void => {
    if (map) {
      addMarker();
    }
  };
  useEffect(initEventListener, [map]);

  const addMarker = (): void => {
    const BerlinDessau: {
      lat: number;
      lng: number;
      parkId: number;
      name: string;
    }[] = [
      {
        lat: 52.520008,
        lng: 13.404954,
        parkId: 1,
        name: "berlin",
      },
      {
        lat: 51.83864,
        lng: 12.24555,
        parkId: 2,
        name: "dessau",
      },
    ];

    BerlinDessau.map((city) => {
      const marker: GoogleMarker = new google.maps.Marker({
        position: { lat: city.lat, lng: city.lng },
        map: map,
        icon: getIconAttributes("blue"),
      });
    });
  };

  //icon attributes, change icon color and svg types here

  const getIconAttributes = (iconColor: string) => {
    return {
      path: "M11.0639 15.3003L26.3642 2.47559e-05L41.6646 15.3003L26.3638 51.3639L11.0639 15.3003 M22,17.5a4.5,4.5 0 1,0 9,0a4.5,4.5 0 1,0 -9,0Z",
      fillColor: iconColor,
      fillOpacity: 0.8,
      strokeColor: "blue",
      strokeWeight: 2,
      anchor: new google.maps.Point(30, 50),
    };
  };

  const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
    if (ref.current) {
      setMap(
        new google.maps.Map(ref.current, {
          zoom: zoomLevel,
          center: address,
          mapTypeControl: mapTypeControl,
          streetViewControl: false,
          rotateControl: false,
          scaleControl: true,
          fullscreenControl: false,
          panControl: false,
          zoomControl: true,
          gestureHandling: "cooperative",
          mapTypeId: mapType,
          draggableCursor: "pointer",
        })
      );
    }
  };

  return (
    <section className="map-container">
      <div ref={ref} className="mapContainerDiv"></div>
    </section>
  );
};

export default Map;
