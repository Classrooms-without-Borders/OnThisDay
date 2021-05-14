import React from 'react';
import timelineYears from  './timelineYears.js';
import TimelineItem from './TimelineItem.js';
import '../styling/Timeline.css'



const Timeline = () => timelineYears.length > 0 && (
    <div className="timeline-container">
        {timelineYears.map((data, idx) => (
            <TimelineItem data = {data} key={idx} />
        ))}
    </div>
);

export default Timeline;