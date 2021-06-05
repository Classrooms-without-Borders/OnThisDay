import React from "react";
import '../styling/About.css'
import { Button, Typography } from '@material-ui/core';
import { Container, Row, Col } from 'reactstrap';
import pic from '../images/CWB_Logo_KO_NoTag.png';

class About extends React.Component {
	constructor() {
        super();
		this.formSubmit = this.formSubmit.bind(this);
		this.state = {
			fields: {},
			errors: {}
		}
	}
	handleChange(field, event) {
		let fields = this.state.fields;
		fields[field] = event.target.value;        
		this.setState({fields});

		
	}

	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
	}

	formSubmit(event) {
		event.preventDefault();
		let fields = this.state.fields;
		

		if(this.handleValidation()){
			alert("Form submitted");
		} else{
			alert("Form has errors.")
		}
		
	}
	render() {
		return (
			<React.Fragment>
				<div className="body">
				<Container id="first-section">
				<Row>
				<Col sm="1" md="5" lg="6">
					<Typography variant="h6" component="h2" className="title">
						ABOUT THE PROJECT</Typography>
					<img src={pic} className=" img-fluid"></img>
				</Col>
				<Col sm="1" md="7" lg="6">
					<Typography variant="subtitle1" gutterBottom className="title">
					On this day, a project of <a href="https://classroomswithoutborders.org/" target="_blank" rel="noopener noreferrer">Classrooms Without Borders</a>, is a collection of student research to
					uncover and share the personal histories of the individuals during World War II and the
					Holocaust. For too long, Holocaust education has been taught at the macro level, with total
					numbers of lives lost and high level governmental implications of war. What is overlooked is the
					individual. The human beings that comprise the numbers and the immense potential that was
					annihilated. For students to grapple with the implications of the Holocaust and genocide studies,
					they must connect to the humanity that was eradicated.
		     		</Typography>
					 <br />

					 <Typography variant="subtitle1" gutterBottom>
					 Through careful research, first person sources, family photographs, and more, students are
						asked to dig deep into the personal, historical and military stories from the Holocaust that may
						be largely unknown. Only by understanding what was, can we really understand what was lost.
		     		</Typography>
					 <br />

					 <Typography variant="subtitle1" gutterBottom>
					 As part of a new Holocaust education curriculum, Educators and students may choose to focus
on a specific time period or a specific region to research. We invite students to dig into the
stories and artifacts presented here as well as research and submit their own stories.
		     		</Typography>
						 </Col>
						</Row>
						</Container>
					  
				<Container id="second-section">
				<Row>
				<Col sm="1" md="5" lg="6">
					<Typography variant="h6" component="h2" className="title">
						HOW IT WORKS</Typography>
				</Col>
				<Col sm="1" md="7" lg="6" id="second-right">
					<Typography variant="h4" component="h2" className="title2">
						RESEARCH
						</Typography>
					<Typography variant="subtitle1" gutterBottom className="subtitle1">
					  independently or as part of a class or group
		     	</Typography>
					 <br></br>
					 <Typography variant="h4" component="h2" className="title2">
						SUBMIT
						</Typography>
					<Typography variant="subtitle1" gutterBottom className="subtitle1">
					use the submission portal to submit your research, sources and artifacts
		     	</Typography>
					 <br></br>
					 <Typography variant="h4" component="h2" className="title2">
						REVIEW
						</Typography>
					<Typography variant="subtitle1" gutterBottom className="subtitle1">
					the CWB On This Day team will review and fact check all submissions
		     	</Typography>
					 <br></br>
					 <Typography variant="h4" component="h2" className="title2">
						LIVE
						</Typography>
					<Typography variant="subtitle1" gutterBottom className="subtitle1">
					once verified your research will be made public on the site for others to use in future research
		     	</Typography>
					 <br></br>
				</Col>
						</Row>
						</Container>

				<Container id="third-section">
				<Row>
				<Col sm="1" md="5" lg="6">
				<Typography variant="h5" gutterBottom className="list">CONTACT US</Typography>
				</Col>
				<Col sm="1" md="7" lg="6" >
				<Typography variant="subtitle1" gutterBottom className="subtitle1">
				Educators, interested in learning more about how to bring on this day to your classroom?
				</Typography>
				​<Typography variant="subtitle1" gutterBottom className="subtitle1">
				Contact CWB's Educational Programs and Outreach Manager.
				</Typography>
				<form onSubmit={this.formSubmit} className="contact-us-form">
					<div class="row">
						<div class="col">
							<input type="text" class="form-control" placeholder="FirstName" onChange={this.handleChange.bind(this, "firstName")} value={this.state.fields["firstName"]}></input>
						</div>
						<div class="col">
							<input type="text" class="form-control" placeholder="LastName" onChange={this.handleChange.bind(this, "lastName")} value={this.state.fields["lastName"]}></input>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<input type="text" class="form-control" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}></input>
						</div>
						<div class="col">
							<input type="text" class="form-control" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}></input>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<input type="text" class="form-control" placeholder="School" onChange={this.handleChange.bind(this, "school")} value={this.state.fields["school"]}></input>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<textarea name="message" class="form-control" rows="4" cols="50" placeholder="Message" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}></textarea>
						</div>
					</div>
					<input className="button" type="submit" value="Submit" />
				</form>
				
				</Col>
					
					</Row>
						</Container>

				
				
    
					<a href='/submit'><Button variant="contained" color="primary">
        				Submit an Entry
      				</Button></a>
					<a href='/gallery'><Button variant="contained" color="primary">
        				Explore the Gallery
      				</Button></a>
					
				</div>
			</React.Fragment>
		);
	}
}

export default About;