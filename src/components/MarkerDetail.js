import React from "react";
import '../styling/Details.css';
import ImageCarousel from '../components/ImageCarousel';

const MarkerDetail = (props) => {
    return (
        <div style={{padding: 16}}>
            {props.images && <ImageCarousel imageList={props.images} height={280}/>}
            <h4 className='title-location' style={{fontSize: 32}}>
                {props.subjectName}
            </h4>
            <br />
            <h4 className='submitter-location'>
                {props.date === undefined ? 'Sep 17, 1933' : props.date.toDate()}
            </h4>
            <h4 className='submitter-location'>
                {props.location}
            </h4>
            <br />
            {/* TODO: Issues with rendering specific submission pages when not accessing from /gallery */}
            <a href={'./details/' + props.id}>See entry</a>
        </div>
    )
    
}

export default MarkerDetail;