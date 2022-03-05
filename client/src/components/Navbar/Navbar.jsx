import React from "react";
import girardiProfile from '../../contents/media/girardiProfile.jpg'
import "./Navbar-module.css";

export default function Navbar() {
  return (
    <div className="NVB">
      <nav className="navbar fixed-top  navbar-expand-lg navbar-light  bg-generalNB">
        <div className="container">
          <div className="col-4">
            <div className="internalTextNav">
              <img className="imgNavbar" src={girardiProfile} alt='profile' />
              <h2 className="mainFontNav">Girardi Joaquin</h2>
              <p className="titleMainFont">Portfolio</p>
            </div>
          </div>

          <div className="col-4"> 
          <a href="/proyects" className='middleTextpro' >Proyects</a>
          </div>
          <div className="col-4">
            <div className="SocialMediaNav">
              <a href="https://github.com/joacogirardi" className="liSocialMedia">Github</a>
              <a href="https://www.linkedin.com/in/joaquingirardi" className="liSocialMedia">Linkedin</a>
              <a href="https://www.google.com" className="liSocialMedia">Email</a>
              <a href="/certificates" className="liSocialMedia">Certificates</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
