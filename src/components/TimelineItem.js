import React from 'react';
import './timelineYears.js';
import '../styling/TimelineItem.css'


const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
           {data.year}
        </div>   
    </div>
);

export default TimelineItem;