import React from 'react';
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import facebook from '../images/facebook-logo.png';
import twitter from '../images/twitter-logo.png';
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
        <div> <p style={{color:'white'}}>© Copyright 2021. Classrooms Without Borders. All rights reserved.Contact Us</p> </div>
        <div> <p style={{color:'white'}}> <a href="https://classroomswithoutborders.org/" target="_blank" rel="noopener noreferrer">Privacy Statement</a> </p> </div>
        <div>
          <a href="https://www.facebook.com/classroomswithoutborders">
            <img src={facebook}  alt="logo"  />
          </a>
          </div>
        
          <div>
          <a href="https://twitter.com/CWBPgh">
            <img src={twitter}  alt="logo"  />
          </a>
          </div>
        </div>

    </div>
    )
}

export default Footer;
