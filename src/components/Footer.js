import React from 'react';
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import facebook from '../images/facebook-logo.png';
import twitter from '../images/twitter-logo.png';


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
*/

function Footer(props) {
    return(
    <div className="footer" style={{backgroundColor:'#222629', padding:'-10%'}}>
    <img src={logo}  alt="logo"  />
	<p style={{color:'white'}}>© Copyright 2021. Classrooms Without Borders. All rights reserved.Contact Us</p>
	<p style={{color:'white'}}> <a href="https://classroomswithoutborders.org/" target="_blank" rel="noopener noreferrer">Privacy Statement</a> </p>
  
  <img src={facebook}  alt="logo"  />
  <img src={twitter}  alt="logo"  />
    </div>
    )
}

export default Footer;
