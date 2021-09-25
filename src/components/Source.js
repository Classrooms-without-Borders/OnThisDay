import React from 'react';
import { Component } from 'react';
 
class  Source extends Component {
 constructor(props) {
   super(props);
 }
 
 
 render() {
   return (
       <div className="source" style={{backgroundColor:'#0093D0', padding:'-10%'}}>
   <h2>Sources</h2>
   <br></br>
  
   <ul>{
           this.props.sourceList.map(function(source){
           // returns Nathan, then John, then Jane
        
           return <li> <p> <a href={source.sourceUrl} target="_blank" rel="noopener noreferrer">{source.sourceName}</a> </p> </li>
         })
       }</ul>
   </div>
     );
 }
 
 
 
 
 
}
 
export default Source;
