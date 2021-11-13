import React, { useState } from "react";
import { InfoWindow, Marker } from '@react-google-maps/api';
import MarkerDetail from './MarkerDetail';

const CustomMarker = (props) => {
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    

    let myStringArray = props.imageList;
    var arrayLength = myStringArray.length;
    let listOfImages = [];
    for (var i = 0; i < arrayLength; i++) {
        console.log("object is " + JSON.stringify(myStringArray[i]));
        //Do something
        listOfImages.push(myStringArray[i].image);
        console.log("this is in my image list " + JSON.stringify(listOfImages[i]));
    }
    

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
                    images={listOfImages}
                    imageList={props.imageList}
                />
            </InfoWindow>
            ) : null}
        </Marker>
    )
}

export default CustomMarker;
