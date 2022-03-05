import React from "react";
import Swal from "sweetalert2";
import "./Footer-module.css";

export default function Footer() {
  const underBuild = ()=>{Swal.fire("feature under construction")}
  return (
    <footer className="footerHome">
      <div className="container">
        <div className="row">

            <div className="col-4">
          <div className="columFootInf">
              <h4 className="titleFootList">Girardi Developer</h4>
              <ul className="listFoot1">
                <li className="everyUlList">This site was developed by Joaquin Girardi</li>
                <li className="everyUlList">All rights reserved</li>
                <li className="everyUlList">
                  Go to the <a href="#top">top</a>
                </li>
              </ul>
            </div>
          </div>

            <div className="col-4">
          <div className="columFootInf">
              <h4 className="titleFootList">Some Relevant Links</h4>
              <ul className="listFoot1">
                <li className="everyUlList">
                  <a
                    href="https://github.com/joacogirardi"
                    className="liSocialMedia"
                  >
                    Github
                  </a>
                </li>
                <li className="everyUlList">
                  <a
                    href="https://www.linkedin.com/in/joaquingirardi"
                    className="liSocialMedia"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="everyUlList">
                  Download my <button className="btn btn-black" onClick={underBuild}>CV</button>
                </li>
              </ul>
            </div>
          </div>

            <div className="col-4">
          <div className="columFootInf">
              <h4 className="titleFootList">Leave your email</h4>
              <ul className="listFoot1">
                <li className="everyUlList">Leave your email and I will contact you</li>
                <li className="everyUlList">
                  <div className="contInptNav">
                  <input placeholder="Write your email id here"></input>
                  <button className="btn btn-primary">save</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
