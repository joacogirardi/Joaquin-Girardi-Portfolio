import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setNewUser } from "../../redux/actions";
import swal from "sweetalert2";
import "./DemoCode-module.css";

export default function DemoCode() {
  const [userName, setuserName] = useState();
  const dispatch = useDispatch();
  const cookies = new Cookies();
 
  function handleSubmit(e) {
    e.preventDefault();
    if (userName?.name === undefined || userName?.name.length < 1 ) {
      setuserName({...userName, name : "Guest"})
      return swal.fire("Enter a valid name and try again");
    } 
      dispatch(setNewUser(userName?.name));
      cookies.set("name", userName?.name, { path: "/" });
      swal.fire(`Hello ${userName?.name}!`);
      setTimeout((window.location.href = "/"), 3000);
    
  }

  function handleChange(e) {
    e.preventDefault();
    setuserName({
      ...userName,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <head>
        <link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css" />
      </head>
      <body>
        <script src="sweetalert2/dist/sweetalert2.min.js"></script>
      </body>

      <div className="containText">
        <div style={{ "margin-top": "2pc", "margin-bottom": "3.5pc" }}>
          <h3 style={{ color: "white" }}>What will you find here?</h3>
          <span className="InfAboutPage">
            This is my portfolio, where you will find
          </span>
          <br />
          <span className="InfAboutPage">
            <strong>contact information,</strong> projects in which
          </span>
          <br />
          <span className="InfAboutPage">I was working and you will know</span>
          <br />
          <span className="InfAboutPage">
            {" "}
            a little <a href="#AboutMe">about me</a>
          </span>
        </div>

        <div style={{ display: "grid" }}>
          <button className="btn btn-info">Contact Now</button>
        </div>

        <div class="accordion accordion-flush">
          <div class="accordion-item" id="bgAcord">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                id="buttonMainTry"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Hey! Try this
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <p className="haveThePs">
                <p className="codeDemoHome">
                  <span style={{ color: "#00f3ff" }}>function</span>
                  <span className="variables">{" Greet "}</span>
                  <span className="parentDemo">{"( ) {"}</span>
                </p>
                <p className="codeDemoHome" style={{ "margin-left": "15px" }}>
                  {" "}
                  <span style={{ color: "#00f3ff" }}>const </span>
                  <span className="variables">submit</span>
                  <span className="tagsHTML"> =</span>
                  {"  ( )=>{dispatch (greetUser( ))}"}
                </p>
                <p className="codeDemoHome" style={{ "margin-left": "30px" }}>
                  <span className="tagsHTML">return </span>
                  <span className="parentDemo">{"("}</span>
                </p>
                <p className="codeDemoHome" style={{ "margin-left": "45px" }}>
                  <span className="tagsHTML">{"<form "}</span>
                  {"onSubmit={submit}"}
                  <span className="tagsHTML">{">"}</span>
                </p>
                <p className="codeDemoHome">
                  {" "}
                  <span className="tagsHTML">{"<input"}</span>
                  <span className="variables"> placeholder</span>
                  {" =Whats your Name?"}
                  <span className="tagsHTML">{"></input>"}</span>
                </p>
                <p className="codeDemoHome">
                  <span className="tagsHTML">{"<button"}</span>
                  <span className="variables"> type</span>
                  {" =submit>Greet me!"}
                  <span className="tagsHTML">{"</button>"}</span>
                </p>
                <p
                  className="codeDemoHome"
                  style={{ "margin-left": "45px", color: "rgb(255, 81, 0)" }}
                >
                  {"</form>"}
                </p>
                <p
                  className="codeDemoHome"
                  style={{ "margin-left": "30px", color: "violet" }}
                >
                  {")"}
                </p>
                <p className="codeDemoHome" style={{ color: "violet" }}>
                  {"}"}
                </p>
              </p>
              <p className="codeDemoInfo">
                That's a simple function, let's see what it can do👇
              </p>
              <div className="inputsHomeDemo">
                <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                  <input
                    name="name"
                    value={userName?.name}
                    onChange={(e) => handleChange(e)}
                    className=""
                    placeholder="Whats your Name?"
                  ></input>
                  <button className="btn btn-info" type="submit">
                    {" "}
                    Greet me!{" "}
                  </button>
                  <div style={{ "margin-bottom": "2pc" }}></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
