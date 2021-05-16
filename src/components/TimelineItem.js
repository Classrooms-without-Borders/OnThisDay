import React from 'react';
import '../styling/TimelineItem.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { getTimelineYears } from '../util';

export const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <Button component={Link} to={{pathname: `gallery/${data.year}`}} color="primary">
        
            <div className="timeline-item-content">
                {data.year}
            </div>   
        </Button>
    </div>
);