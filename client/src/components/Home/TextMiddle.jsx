import React from "react";
import DemoCode from "../Home/DemoCode";
import Cookies from "universal-cookie";
import "./TextMiddle-module.css";

export default function TextMiddle() {
  const cookies = new Cookies();
  const name = cookies.get("name");

  return (
    <div style={{ "margin-top": "8pc" }}>
      <div className="row">
        <div className="col-12 someTextHere">
          <div>
            <h1 className="txtMP">Welcome {name ? name : "guest"}</h1>
            <small style={{ color: "#a1a1a1" }}>
              {" "}
              I am Joaquin Girardi, <strong>Full Stack Developer</strong>
            </small>
          </div>
          <div className="mainScreenText">
            <small className="txtMPSmall">
              This is my personal portfolio Feel free to watch it
              <br />I hope you like it
            </small>
          </div>
          <div style={{ margin: "1.5pc" }}></div>
          <div className="designMainPage">
            <DemoCode />
          </div>
        </div>
      </div>
    </div>
  );
}
