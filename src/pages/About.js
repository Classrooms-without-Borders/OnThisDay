import React from "react";
import '../styling/About.css'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col } from 'reactstrap';
import pic from '../images/cwb-logo-reverse-w-tagline 1.png';

class About extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="body">
				<Typography variant="h1" component="h2" className="title">
						On this Day in History
      				</Typography>
				<Container id="first-section">
					<Row>
					<Col sm="1" md="4" lg="4">
						<img src={pic}></img>
					</Col>
					<Col sm="1" md="8" lg="8">
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
					  {/*divider*/}.
					  {/* <Typography variant="subtitle1" gutterBottom>
					  Classrooms Without Borders, is a premier provider of transformational professional
					development and learning opportunities both in and out of the classroom, with an educational
					focus on topics relating to Jewish history, the Holocaust, antisemitism, genocide, human rights
					and social justice. CWB works to combat discrimination, systemic racism and hate while
					promoting the values of diversity, acceptance, and respect.
		     		</Typography>
						 */}
					<div id="second-section">
					 <Typography variant="h3" component="h2" >
					 How it works
      				</Typography>

					  <Typography variant="subtitle1" gutterBottom className="list">
					  1) Research - independently or as part of a class or group
		     		</Typography>

					 <Typography variant="subtitle1" gutterBottom className="list">
					 2) Submit - use the submission portal to submit your research, sources and artifacts
		     		</Typography>


					<Typography variant="subtitle1" gutterBottom className="list">
					3) Review - the CWB On This Day team will review and fact check all submissions
					</Typography>


					<Typography variant="subtitle1" gutterBottom className="list">
					4) Live - once verified your research will be made public on the site for others to use in future research.
					</Typography>
						<Typography variant="h3" component="h2">
							Contact</Typography>

						<Typography variant="subtitle1" gutterBottom>
							Educators, interested in learning more about how to bring on this day to your classroom? 
						</Typography>
						<Typography variant="subtitle1" gutterBottom> Contact CWB's <a href="ellen@classroomswithoutborders.org">
								 Educational Programs and Outreach Manager
							</a>.</Typography>
						</div>
					<div className="form">
						<form class="contact-us-form">
							<label>
								Name:
								<input type="text" name="name" />
							</label>
							<br></br>
							<label>
								Email:
								<input type="text" name="name" />
							</label>
							<br></br>
							<label>
								School:
								<input type="text" name="name" />
							</label>
							<br></br>
							<label>
								Message:
								<textarea name="Text1" cols="20" rows="5"></textarea>
							</label>
							<br />
							<input className="button" type="submit" value="Send Message" />
						</form>
				</div>
						<br></br>
						<br></br>
						<br></br>
				
    
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