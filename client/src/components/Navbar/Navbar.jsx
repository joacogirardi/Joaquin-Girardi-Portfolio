import React from "react";
import "./Navbar-module.css";

export default function Navbar() {
  return (
    <div className="NVB">
      <nav className="navbar fixed-top  navbar-expand-lg navbar-light  bg-generalNB">
        <div className="container">
          <div className="col-4">
            <div className="internalTextNav">
              <h2 className="mainFontNav">Girardi Joaquin</h2>
              <p className="titleMainFont">Portfolio</p>
            </div>
          </div>

          <div className="col-4"> 
          <a href="/proyects">Proyects</a>
          </div>
          <div className="col-4">
            <div className="SocialMediaNav">
              <a href="https://www.google.com" className="liSocialMedia">Github</a>
              <a href="https://www.google.com" className="liSocialMedia">Linkedin</a>
              <a href="https://www.google.com" className="liSocialMedia">Email</a>
              <a href="/register" className="liSocialMedia">Load my data</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
