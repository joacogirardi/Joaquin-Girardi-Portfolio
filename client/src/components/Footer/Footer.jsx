import React from "react";
import Swal from "sweetalert2";
import "./Footer-module.css";

export default function Footer() {
  const underBuild = ()=>{Swal.fire("feature under construction")}
  function emailSubmit(){
    Swal.fire("Email scheduled successfully", "in the next few hours you will receive a message from me", "success")
  }
  return (
    <footer className="footerHome">
      <div className="container">
        <div className="row">

            <div className="col-4">
          <div className="columFootInf">
              <h4 className="titleFootList">Girardi Developer</h4>
              <l className="listFoot1">
                <li className="everyUlList">site developed by Joaquin Girardi with 💟</li>
                <li className="everyUlList">All rights reserved</li>
                <li className="everyUlList">
                  Go to the <a href="#top">top</a>
                </li>
              </l>
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
                  Download my <a href="https://drive.google.com/drive/folders/1b2_6JwyAzeHAVl6t4kOMQCk60pUEfHEV?usp=sharing">CV</a>
                </li>
              </ul>
            </div>
          </div>

            <div className="col-4">
          <div className="columFootInf">
              <h4 className="titleFootList">Leave your Data</h4>
              <ul className="listFoot1">
                <li className="everyUlList">Write your email and I will contact</li>
                <li className="everyUlList">
                  <div className="contInptNav">
                  <input placeholder="your email adress"></input><button onClick={emailSubmit} className="btn btn-primary">send</button>
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
