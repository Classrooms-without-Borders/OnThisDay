import React from 'react';
import { getTimelineYears } from  '../util';
import { TimelineItem } from './TimelineItem.js';
import '../styling/Timeline.css'

const timelineYears = getTimelineYears();

export const Timeline = () => timelineYears.length > 0 && (
    <div className="timeline-container">
        {timelineYears.forEach((yr) => (
            <TimelineItem data='year' key={yr} />
        ))}
    </div>
);