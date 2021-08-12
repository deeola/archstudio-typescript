import React, { FC, useRef } from "react";
// import {
//   GoogleMap,
//   withScriptjs,
//   withGoogleMap,
//   Marker,
// } from "react-google-maps";

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

// const MyMap = () => {
//   //Lat and Lng values to be used in position
//   const BerlinDessau = [
//     {
//       lat: 52.520008,
//       lng: 13.404954,
//       parkId: 1,
//       name: "berlin",
//     },
//     {
//       lat: 51.83864,
//       lng: 12.24555,
//       parkId: 2,
//       name: "dessau",
//     },
//   ];

//   return (
//     <GoogleMap
//       defaultZoom={7}
//       defaultCenter={{ lat: 52.520008, lng: 13.404954 }}
//     >
//       {BerlinDessau.map((city) => (
//         <Marker key={city.parkId} position={{ lat: city.lat, lng: city.lng }} />
//       ))}
//     </GoogleMap>
//   );
// };

// const WrappedMap = withScriptjs(withGoogleMap(MyMap));

const Map: FC<IMap> = ({
  mapType: MapTypeId,
  mapTypeControl: boolean = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section ref={ref} className="mapContainerDiv">
      {/* <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${`AIzaSyDe3n2kCyxwMV82eyQtemz11qqMDrhsfto`}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      /> */}
    </section>
  );
};

export default Map;
