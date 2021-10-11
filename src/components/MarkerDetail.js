import React from "react";
import '../styling/Details.css';
import ImageCarousel from '../components/ImageCarousel';
import constants from '../styling/Constants';

const MarkerDetail = (props) => {
    return (
        <div style={{backgroundColor: constants.color.dark}}>
            {props.images && <ImageCarousel imageList={props.images} height={200}/>}
            <div className='card-body'>
                <h4 className='title-location' style={{fontSize: 32}}>
                    {props.subjectName}
                </h4>
                <br />
                {/* TODO: (Karina) Issue with accessing date, always undefined for some reason */}
                <h4 className='submitter-location'>
                    {props.date === undefined ? 'Sep 17, 1933' : props.date.toDate()}
                </h4>
                <h4 className='submitter-location'>
                    {props.location}
                </h4>
                <br /><br />
                {/* TODO: Issues with rendering specific submission pages when not accessing from /gallery */}
                <a href={'./details/' + props.id} style={{
                    color: constants.color.lightGray,
                    fontWeight: 'normal'
                }}>
                    <div style={{
                        backgroundColor: constants.color.accentPrimary,
                        width: '100%',
                        padding: 4
                    }}>
                    See entry
                    </div>
                </a>
                
            </div>
        </div>
    )
    
}

export default MarkerDetail;