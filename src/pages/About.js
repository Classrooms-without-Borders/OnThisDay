import React from "react";
import '../styling/About.css'
import { Button, Typography } from '@material-ui/core';
import { Container, Row, Col } from 'reactstrap';
import pic from '../images/CWB_Logo_KO_NoTag.png';
import constants from '../styling/Constants';

class About extends React.Component {
	render() {
		const header1 = {
			fontFamily: constants.fontFamily.body,
			fontSize: constants.fontSize.xl, 
			fontWeight: '600',
			color: constants.color.accentTertiary,
	}
		const bodyText1 = {
			fontFamily: constants.fontFamily.body,
			fontWeight: '500',
			color: constants.color.light,
		}
		const bodyText2 = {
			fontFamily: constants.fontFamily.body,
			fontSize: constants.fontSize.s, 
			fontWeight: '600',
			color: constants.color.light,
		}
		return (
			<React.Fragment>
				<div className="body" style={{margin: '20px auto 30px', maxWidth: '90vw'}}>
				<Container id="first-section">
				<Row>
				<Col sm="1" md="5" lg="5">
					<h2 style={{
                fontFamily: constants.fontFamily.header,
                fontWeight: '600',
                color: constants.color.light,
            }}>ABOUT THE PROJECT</h2>
					<img src={pic} className=" img-fluid" id="logo"></img>
				</Col>
				<Col sm="1" md="7" lg="7">
					<p style = {bodyText1}>	On this day, a project of <a href="https://classroomswithoutborders.org/" target="_blank" rel="noopener noreferrer">Classrooms Without Borders</a>, is a collection of student research to
					uncover and share the personal histories of the individuals during World War II and the
					Holocaust. For too long, Holocaust education has been taught at the macro level, with total
					numbers of lives lost and high level governmental implications of war. What is overlooked is the
					individual. The human beings that comprise the numbers and the immense potential that was
					annihilated. For students to grapple with the implications of the Holocaust and genocide studies,
					they must connect to the humanity that was eradicated.</p>
					 <br />
					 <p style = {bodyText1}>Through careful research, first person sources, family photographs, and more, students are
						asked to dig deep into the personal, historical and military stories from the Holocaust that may
						be largely unknown. Only by understanding what was, can we really understand what was lost.</p>
					 <br />
					 <p style = {bodyText1}>As part of a new Holocaust education curriculum, Educators and students may choose to focus
					on a specific time period or a specific region to research. We invite students to dig into the
					stories and artifacts presented here as well as research and submit their own stories.</p>
					</Col>
					</Row>
				</Container>
					  
				<Container id="second-section">
				<Row>
				<Col sm="1" md="5" lg="5">
				<h2 style={{
                fontFamily: constants.fontFamily.header,
                fontWeight: '600',
                color: constants.color.light,
            }}>HOW IT WORKS</h2>
				</Col>
				<Col sm="1" md="7" lg="7" id="second-right">
				<h1 style={header1}>RESEARCH</h1>
						<h2 style={bodyText2}>independently or as part of a class or group</h2>
					 <br></br>
					 <h1 style={header1}>SUBMIT</h1>
						<h2 style={bodyText2}>use the submission portal to submit your research, sources and artifacts</h2>
					 <br></br>
					 <h1 style={header1}>REVIEW</h1>
						<h2 style={bodyText2}>the CWB On This Day team will review and fact check all submissions</h2>
					 <br></br>
					 <h1 style={header1}>LIVE</h1>
					<h2 style={bodyText2}>once verified your research will be made public on the site for others to use in future research</h2>
					 <br></br>
				</Col>
						</Row>
						</Container>

				<Container id="third-section">
				<Row>
				<Col sm="1" md="5" lg="5">
				<h3 style={{
                fontFamily: constants.fontFamily.header,
                fontWeight: '600',
                color: constants.color.light,
            }}>CONTACT US</h3>
				</Col>
				<Col sm="1" md="7" lg="7" >
				<p style={{
						fontFamily: constants.fontFamily.body,
						fontWeight: '400',
						color: constants.color.light,
				}}>Educators, interested in learning more about how to bring on this day to your classroom?</p>
				<p style={{
						fontFamily: constants.fontFamily.body,
						fontWeight: '400',
						color: constants.color.light,
				}}>Contact CWB's Educational Programs and Outreach Manager.</p>
				<form className="contact-us-form" style = {bodyText1}>
					<div class="row">
						<div class="col">
							<input type="text" class="form-control" placeholder="First name"></input>
						</div>
						<div class="col">
							<input type="text" class="form-control" placeholder="Last name"></input>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<input type="text" class="form-control" placeholder="Email"></input>
						</div>
						<div class="col">
							<input type="text" class="form-control" placeholder="Phone"></input>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<input type="text" class="form-control" placeholder="School"></input>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<textarea name="message" class="form-control" rows="4" cols="50"></textarea>
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