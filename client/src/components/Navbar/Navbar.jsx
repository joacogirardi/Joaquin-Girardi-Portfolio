import React from "react";
import { Link } from "react-router-dom";
import girardiProfile from "../../contents/media/girardiProfile.jpg";
import "./Navbar-module.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light  bg-generalNB">
        <div className="container-fluid">
          <div className="logoNameNav">
            <Link className="navbar-brand" style={{ margin: "0" }} to="/">
              <img className="imgNavbar" src={girardiProfile} alt="Girardi" />
            </Link>
            <Link to="/">
              <p className="mainFontNav">Girardi Joaquin</p>
            </Link>
            <p className="titleMainFont">Portfolio</p>
          </div>
          <button
            className="navbar-toggler"
            style={{"background-color" : "rgb(107 187 0)", "border-radius" : "8px"}}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="/proyects"
                  className="nav-link active  item_navBar"
                  id="middleTextpro"
                >
                  Proyects
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="https://github.com/joacogirardi"
                  className="nav-link active  item_navBar"
                  id="liSocialMedia"
                >
                  Github
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/joaquingirardi"
                  className="nav-link active  item_navBar"
                  id="liSocialMedia"
                >
                  Linkedin
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="mailto:joacojoacog@gmail.com?subject=Email%20sent%20from%20portfolio&body=Hello!%20I%20communicate%20from..."
                  className="nav-link active  item_navBar"
                  id="liSocialMedia"
                >
                  Email
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/certificates"
                  className="nav-link active  item_navBar"
                  id="liSocialMedia"
                >
                  Certificates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
