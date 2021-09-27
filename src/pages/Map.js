import React, { useState } from "react";
import { 
  GoogleMap, 
  useLoadScript, 
  Marker, 
  InfoWindow 
} from '@react-google-maps/api';
import { mapStyles } from '../styling/mapStyles';

const containerStyle = {
  width: '100vw',
  height: 'calc(100vh - 50.4px)',
  position: 'absolute',
  top: '50.4px'
};

//TODO: pull these from firebase
const markers = [
  {
    id: 1,
    subjectName: "Person 1",
    location: "Poland",
    date: "October 1, 1942",
    position: { lat: 50.02, lng: 19.11 }
  },
  {
    id: 2,
    subjectName: "Person 2",
    location: "Poland",
    date: "September 12, 1933",
    position: { lat: 50.04, lng: 19.57 }
  },
  {
    id: 3,
    subjectName: "Person 3",
    location: "Poland",
    date: "May 5, 1937",
    position: { lat: 50.17, lng: 19.05 }
  },
  {
    id: 4,
    subjectName: "Person 4",
    location: "Poland",
    date: "September 19, 1934",
    position: { lat: 52.13, lng: 21.0 }
  }
];


function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQ6AXhN1dWqYH5pjf8zuIoUyfTb1j0bAY",
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';
  
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <div className="Map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 50, lng: 15 }}
        zoom={4.75}
        options={{ styles: mapStyles }}
      >
        {markers.map(({ id, subjectName, location, date, position }) => (
          <Marker
            key={id}
            subjectName={subjectName}
            location = {location}
            date = {date}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                {/* TODO: put these in a MarkerDetail component */}
                <div>
                  <h4>{subjectName}</h4>
                  <p>{date}</p>
                  <p>{location}</p>
                  {/* TODO: Issues with rendering specific submission pages when not accessing from /gallery */}
                  <a href="./details/RXGWrhS63csz6VF51tES">See entry</a>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;