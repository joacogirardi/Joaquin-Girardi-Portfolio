import React from "react";
import DemoCode from '../Home/DemoCode'
import Cookies from "universal-cookie";
import designSecondbyHome from "../../contents/media/designSecondbyHome.png";
import "./TextMiddle-module.css";

export default function TextMiddle() {
  const cookies = new Cookies()
  const name = cookies.get("name")

  return (
    <div style={{ "margin-top": "8pc" }}>
      <div className="container">
        <div className="row">

          <div className="col-4 someTextHere">
              <h1 className="txtMP">Welcome {name? name : "guest"}</h1>
                <small style={{"color" : "#a1a1a1", "margin-top" :"-15px"}}> I am Joaquin Girardi, <strong>Full Stack Developer</strong></small>
              <div className="mainScreenText">
                <small className="txtMPSmall">
                  This is my personal portfolio Feel free to watch it
                  <br />and I hope you like it
                </small>
              </div>
          </div>

          <div className="col-1"></div>
          <div className="col-7">
            <div className="designMainPage">
              <DemoCode />
              <img src={designSecondbyHome} alt="nf" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
