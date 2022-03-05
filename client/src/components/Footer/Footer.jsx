import React from "react";
import "./Footer-module.css";

export default function Footer() {
  return (
    <footer className="footerHome">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h4 className="titleFootList">Girardi Developer</h4>
            <ul className="listFoot1">
              <li>This site was developed by Joaquin Girardi</li>
              <li>All rights reserved</li>
              <li>
                go to the <a href="#top">top</a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h4 className="titleFootList">Some Relevant Links</h4>
            <ul className="listFoot1">
              <li>
                <a
                  href="https://github.com/joacogirardi"
                  className="liSocialMedia"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/joaquingirardi"
                  className="liSocialMedia"
                >
                  Linkedin
                </a>
              </li>
              <li>
                Download my <a href="www.drive.com">CV</a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h4 className="titleFootList">leave your email</h4>
            <ul className="listFoot1">
                <li>
                leave your email and I will contact you
                </li>
              <li>
                <input placeholder="Write your email id here"></input>
                <button className="btn btn-primary">save</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
