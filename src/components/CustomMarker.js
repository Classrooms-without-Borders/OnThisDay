import React, { useState } from "react";
import {
    Marker,
    InfoWindow 
} from '@react-google-maps/api';
import MarkerDetail from './MarkerDetail';

const CustomMarker = (props) => {
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };
    return (
        <Marker
            position={props.position}
            onClick={() => handleActiveMarker(props.id)}
            clusterer={props.clusterer}
        >
            {activeMarker === props.id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <MarkerDetail 
                    id={props.id}
                    subjectName={props.subjectName}
                    location = {props.location}
                    eventDate={props.eventDate}
                    images={props.images}
                />
            </InfoWindow>
            ) : null}
        </Marker>
    )
}

export default CustomMarker;
