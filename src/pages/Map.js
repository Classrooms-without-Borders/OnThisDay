import CustomMarker from '../components/CustomMarker';
import { getAllVerified } from '../util';

import { GoogleMap, MarkerClusterer, useLoadScript } from '@react-google-maps/api';
import { mapStyles } from '../styling/mapStyles';
import React, { useState, useEffect } from "react";


const containerStyle = {
  width: '100vw',
  height: 'calc(100vh - 50.4px)',
  position: 'absolute',
  top: '50.4px'
};

function Map() {
  const [markers, setMarkers] = useState([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQ6AXhN1dWqYH5pjf8zuIoUyfTb1j0bAY",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllVerified();
      setMarkers(data);
    };
    fetchData();
  }, [])

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  //let myImage = "hello";


  return (
    <div className="Map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 50, lng: 15 }} // centers map over Europe
        zoom={4}
        options={{ styles: mapStyles }}
      >
        <MarkerClusterer>
          {clusterer =>
          markers.map(({ id, subjectName, location, eventDate, lat, lng, imageList }) => (
            <CustomMarker 
              {...{id, subjectName, location, eventDate, clusterer, imageList}}
              position={{lat: lat, lng: lng}}
            />
          ))}
          </MarkerClusterer>
      </GoogleMap>
    </div>
  );
}

export default React.memo(Map);