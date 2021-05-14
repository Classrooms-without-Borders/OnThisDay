import React from 'react';
import './timelineYears.js';
import '../styling/TimelineItem.css'
import Button from '@material-ui/core/Button';
// routers
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
   // Redirect
  } from "react-router-dom";



const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <Button component={Link} to={{pathname: `gallery/${data.year}`}} color="primary">
        
            <div className="timeline-item-content">
                {data.year}
            </div>   
        </Button>
    </div>
);

export default TimelineItem;