import React from 'react';
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import programInfo from '../images/jewish-federation-pitt.png';
import facebook from '../images/facebook-logo.png';
import insta from '../images/insta-logo.png';
import twitter from '../images/twitter-logo.png';
import '../styling/Footer.css';

export function Footer() {
  return (
    <div className="footer">
      <div className="flexbox-container">
        <a href="https://classroomswithoutborders.org/about-us/" target="_blank" rel="noopener noreferrer" id="cwb_logo">
          <img src={logo} alt="logo" />
        </a>
        

        <div id="footer_content">
          <p>Classrooms Without Borders is an independently funded program of the Jewish Federation of Greater Pittsburgh</p>
          <br />
          <div id="links">
            <b><a href="https://classroomswithoutborders.org/" target="_blank" rel="noopener noreferrer">Website</a></b>

            <a href="https://www.facebook.com/classroomswithoutborders">
            <img src={facebook} alt="logo"/>
          </a>
          <a href="https://www.instagram.com/classroomswithoutborders/">
              <img src={insta}  alt="logo"/>
          </a>
          <a href="https://twitter.com/cwbpgh">
              <img src={twitter}  alt="logo"  />
          </a>

            <b><a href="https://classroomswithoutborders.org/donate/" target="_blank" rel="noopener noreferrer">Donate</a></b>
          </div>
          
        </div>

        <img src={programInfo} id="jewish_fed_logo" alt="logo"/>
        <div>
         
        </div>
        <div>
          
            
         
        </div>
      </div>
    </div>
  );
}