import React, { useState } from 'react';
import '../styling/Details.css'
import Source from '../components/Source'
//import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel' 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';





import {
  firebase
} from '../util';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});
  

class Details extends React.Component {
    /*
    constructor () {
  		super();
     }
     */
   //classes = useStyles();


	 
	render() {
		return (

    <React.Fragment> 
      <Carousel>
        <Carousel.Item>
          <img src={logo}  alt="logo"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={logo}  alt="logo"/>  
        </Carousel.Item>
        <Carousel.Item>
          <img src={logo}  alt="logo"/>
        </Carousel.Item>
      </Carousel>

        {/*Right now everything is hard coded but should be passed in as props in future */}
      <div className="card-body">
        <h1 className="title-event">Sofka Skipwith</h1>
        <h2 className="title-location">London, England</h2>
        <h2 className="title-date">3 Apr 1944</h2>

        <div className="row=title">
          <h3 className="card-submitter">By Jane Doe</h3>
          <h3 className="card-grade">Grade 8</h3>
          <h3 className="submitter-location">Meadowvale PS</h3>
        </div>

        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>


      </div>
   
      <Source/>


      </React.Fragment>
     

			);
	}
}


export default Details;


