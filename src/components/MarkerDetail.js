import constants from '../styling/Constants';
import { dateToString } from '../util/format';
import ImageCarousel from '../components/ImageCarousel';
import React from "react";
import '../styling/Details.css';

const MarkerDetail = (props) => {
    console.log("this is in my image list  inside marker" + JSON.stringify(props.images));
    console.log("this is in my image map  inside marker" + JSON.stringify(props.imageList));
    return (
        <div style={{backgroundColor: constants.color.dark}}>
            {props.imageList && <ImageCarousel imageList={props.imageList} height={200}/>}
            <div className='card-body'>
                <h4 className='title-location' style={{fontSize: 32}}>
                    {props.subjectName}
                </h4>
                <br />

                <h4 className='submitter-location'>
                    {props.location}
                </h4>
                <h4 className='submitter-location'>
                    {dateToString(props.eventDate)}
                </h4>

                <br /><br />
                <a href={'./details/' + props.id} style={{ color: constants.color.lightGray, fontWeight: 'normal' }}>
                    <div style={{ backgroundColor: constants.color.accentPrimary, width: '100%', padding: 4 }}>
                        See entry
                    </div>
                </a>
                
            </div>
        </div>
    )
    
}

export default MarkerDetail;