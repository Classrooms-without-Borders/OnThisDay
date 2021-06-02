import React from 'react';
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import programInfo from '../images/jewish-federation-pitt.png';
import facebook from '../images/facebook-logo.png';
import insta from '../images/insta-logo.png';
import twitter from '../images/twitter-logo.png';
import '../styling/Footer.css';

export function Footer() {
  return (
    <div className="footer" style={{backgroundColor:'#222629', padding:'-10%'}}>
      <div className="flexbox-container">
        <div><a href="https://classroomswithoutborders.org/about-us/" target="_blank" rel="noopener noreferrer"><img src={logo} alt="logo" /></a></div>
        <div><p style={{color:'white'}}>Classrooms Without Borders is an independently funded program of the Jewish Federation of Greater Pittsburgh
        <br />
        <ul><a href="https://classroomswithoutborders.org/" target="_blank" rel="noopener noreferrer">Website</a></ul>
        <ul><a href="https://classroomswithoutborders.org/donate/" target="_blank" rel="noopener noreferrer">Donate</a></ul>
        
          <a href="https://www.facebook.com/classroomswithoutborders">
            <img src={facebook} alt="logo" hspace="20"/>
          </a>
          <a href="https://www.instagram.com/classroomswithoutborders/">
              <img src={insta}  alt="logo" hspace="20" />
          </a>
          <a href="https://twitter.com/cwbpgh">
              <img src={twitter}  alt="logo"  />
            </a>
        </p></div>
        <div><img src={programInfo} alt="logo" height="100px"/></div>
        <div>
         
        </div>
        <div>
          
            
         
        </div>
      </div>
    </div>
  );
}