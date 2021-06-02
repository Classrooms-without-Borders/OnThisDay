import React from 'react';
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';
import programInfo from '../images/jewish-federation-pitt.png';
import facebook from '../images/facebook-logo.png';
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
        </p></div>
        <div><img src={programInfo} alt="logo" height="100px"/></div>
        <div>
          <a href="https://www.facebook.com/classroomswithoutborders">
            <img src={facebook} alt="logo" />
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
  );
}