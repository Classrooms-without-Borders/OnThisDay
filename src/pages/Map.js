import React, { useState, useEffect } from "react";
import { 
  GoogleMap, 
  useLoadScript, 
  Marker, 
  InfoWindow 
} from '@react-google-maps/api';
import { mapStyles } from '../styling/mapStyles';
import { getAllVerified } from '../util';
import { Link } from "react-router-dom"

const containerStyle = {
  width: '100vw',
  height: 'calc(100vh - 50.4px)',
  position: 'absolute',
  top: '50.4px'
};

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
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
        {markers.map(({ id, subjectName, location, date, lat, lng }) => (
          <Marker
            key={id}
            subjectName={subjectName}
            location = {location}
            date={date}
            position={{lat: lat, lng: lng}}
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
                  <a href={'./details/' + id}>See entry</a>

                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
}

export default React.memo(Map);