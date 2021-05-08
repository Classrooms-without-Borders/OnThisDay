import React from "react";
import '../styling/About.css'
import BigCard from '../components/BigCard';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

					<Typography variant="h1" component="h2" >
						On this Day in History
      				</Typography>
					  <Typography variant="subtitle1" gutterBottom>
					  A brief description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas massa at aliquam suscipit. Integer ut laoreet turpis. Phasellus orci leo, dapibus sit amet consequat sed, tincidunt in augue.
      </Typography>
					<Button class="btn-design">
        				Explore the Gallery
      				</Button>
					<Button variant="contained" color="primary">
        				Submit an Entry
      				</Button>
				</React.Fragment>
				


					
				
			);
	}
}


export default About;


