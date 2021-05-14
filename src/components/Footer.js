import React from 'react';
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import programInfo from '../images/jewish-federation-pitt.png';
import facebook from '../images/facebook-logo.png';
import insta from '../images/insta-logo.png';
import '../styling/Footer.css';


//import { makeStyles } from '@material-ui/core/styles';

/*
using css to style is easier than using makeStyles from material ui
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));


function TypographyTheme() {
    const classes = useStyles();
  
    return <div className={classes.root}>{"Sample footer."}</div>;
  }
  flex-box container for centering!
*/

function Footer(props) {
    return(
    <div className="footer" style={{backgroundColor:'#222629', padding:'-10%'}}>
      <div class="flexbox-container">
        <div> <img src={logo}  alt="logo"  /> </div>
        <div> <img src={programInfo}  alt="logo"  /> </div>
        <div> <p style={{color:'white'}}>Classrooms Without Borders is an independently funded program of the Jewish Federation of Greater Pittsburgh</p> </div>
        <div> <p style={{color:'white'}}> <a href="https://classroomswithoutborders.org/" target="_blank" rel="noopener noreferrer">Website</a> </p> </div>
        <div> <p style={{color:'white'}}> <a href="https://classroomswithoutborders.org/donate/" target="_blank" rel="noopener noreferrer">Donate</a> </p> </div>
        <div>
          <a href="https://www.facebook.com/classroomswithoutborders">
            <img src={facebook}  alt="logo"  />
          </a>
          </div>
        
          <div>
          {/*
            <a href="https://www.instagram.com/classroomswithoutborders/">
              <img src={insta}  alt="logo"  />
            </a>
          */}
          </div>
        </div>

    </div>
    )
}

export default Footer;
