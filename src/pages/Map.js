import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { mapStyles } from '../styling/mapStyles';

const containerStyle = {
  width: '100vw',
  height: 'calc(100vh - 50.4px)',
  position: 'absolute',
  top: '50.4px'
};

const center = {
  lat: 50,
  lng: 15,
};

const options = {
  styles: mapStyles,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQ6AXhN1dWqYH5pjf8zuIoUyfTb1j0bAY",
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <div className="Map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4.75}
        options={options}
      ></GoogleMap>
    </div>
  );
}

export default Map;