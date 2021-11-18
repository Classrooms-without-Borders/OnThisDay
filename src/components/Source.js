import React from 'react';
import { Component } from 'react';
import constants from '../styling/Constants';
 
class  Source extends Component {
 render() {
   return (
       <div className="source" style={{backgroundColor:constants.color.backgroundColorSource, padding:'-10%'}}>
   <h2>Sources</h2>
   <br></br>
  
   <ul>{
           this.props.sourceList.map(function(source){        
            return <li> <p> <a href={source.sourceUrl} target="_blank" rel="noopener noreferrer">{source.sourceName}</a> </p> </li>
         })
       }</ul>
   </div>
     );
 }
 
}
 
export default Source;
