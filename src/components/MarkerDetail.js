import React from "react";

const MarkerDetail = (props) => {
    return (
        <div>
            <h4>{props.subjectName}</h4>
            <p>{props.date}</p>
            <p>{props.location}</p>
            {/* TODO: Issues with rendering specific submission pages when not accessing from /gallery */}
            <a href={'./details/' + props.id}>See entry</a>
        </div>
    )
    
}

export default MarkerDetail;