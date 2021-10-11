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
            subjectName={props.subjectName}
            location = {props.location}
            date={props.date}
            position={props.position}
            onClick={() => handleActiveMarker(props.id)}
            clusterer={props.clusterer}
            images={props.images}
        >
            {activeMarker === props.id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <MarkerDetail 
                    id={props.id}
                    subjectName={props.subjectName}
                    location = {props.location}
                    date={props.date}
                    images={props.images}
                />
            </InfoWindow>
            ) : null}
        </Marker>
    )
}

export default CustomMarker;
