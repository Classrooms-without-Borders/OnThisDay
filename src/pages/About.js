import React from "react";
import '../styling/About.css'
import BigCard from '../components/BigCard';
//import { makeStyles } from '@material-ui/core/styles';


  

class About extends React.Component {
    /*
    constructor () {
  		super();
     }
     */
	 //classes = useStyles();
	 
	render() {
		return (
			
			
				<React.Fragment>
				<h2>Welcome to about page</h2>
					<BigCard/>
				</React.Fragment>
					
				
			);
	}
}


export default About;


