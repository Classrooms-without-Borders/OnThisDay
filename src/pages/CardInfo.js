//when a user clicks on an historical event card, this is the site they are brought to
import React from "react";
import '../styling/About.css'
import { Button, Typography } from '@material-ui/core';
<<<<<<< HEAD
import { BigCard } from '../components';
=======
import { BigCard, Header } from '../components';
>>>>>>> master

class CardInfo extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<h2>Welcome to about page</h2>
				<BigCard/>
				<Typography variant="h1" component="h2">
					On this Day in History
				</Typography>
					<Typography variant="subtitle1" gutterBottom>
					A brief description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas massa at aliquam suscipit. Integer ut laoreet turpis. Phasellus orci leo, dapibus sit amet consequat sed, tincidunt in augue.
					</Typography>
				<Button className="btn-design">
					Explore the Gallery
				</Button>
				<Button variant="contained" color="primary">
					Submit an Entry
				</Button>
			</React.Fragment>
		);
	}
}

export default CardInfo;