import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setNewUser } from "../../redux/actions";
import swal from "sweetalert2";
import "./DemoCode-module.css";
import designSecondbyHome from "../../contents/media/designSecondbyHome.png";

export default function DemoCode() {
  const [userName, setuserName] = useState();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  function emailSubmit() {
    swal.fire(
      "Email scheduled successfully",
      "in the next few hours you will receive a message from me",
      "success"
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userName?.name === undefined || userName?.name.length < 1) {
      setuserName({ ...userName, name: "Guest" });
      return swal.fire("Enter a valid name and try again");
    }
    dispatch(setNewUser(userName?.name));
    cookies.set("name", userName?.name, { path: "/" });
    swal.fire(`Hello ${userName?.name}!`);
    setTimeout(() => (window.location.href = "/"), 4000);
  }

  function handleChange(e) {
    e.preventDefault();
    setuserName({
      ...userName,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container contCodeDemo">
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
        <div className="containText">
          <div className="textInDem">
            <h3 style={{ color: "white" }}>What will you find here? 💡</h3>
            <span className="InfAboutPage">
              This is my portfolio, where you will find contact information, projects in which
            </span>
            <br />
            <span className="InfAboutPage">
              I've been working and you will know
            </span>
            <br />
            <span className="InfAboutPage">
              a little{" "}
              <a style={{ color: "#0dcaf0" }} href="#AboutMe">
                about me
              </a>
            </span>
          </div>

          <div>
            <button
              type="button"
              class="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{"width" : "21.5pc"}}
            >
              Contact Now
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div
                    class="modal-header"
                    style={{ "background-color": "black", color: "#9f9f9f" }}
                  >
                    <h4 class="modal-title" id="exampleModalLabel">
                      Let's contact me
                    </h4>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body" id="infoHomeModal">
                    <p>
                      you can send me an email to
                      <span>
                        <a href="mailto:joacojoacog@gmail.com?subject=Email%20sent%20from%20portfolio&body=Hello!%20I%20communicate%20from...">
                          {" "}
                          my address
                        </a>{" "}
                        or
                      </span>
                    </p>
                    <p>
                      Leave your email here, and i will contact as soon as i can
                    </p>
                    <div style={{ display: "flex" }}>
                      <input placeholder="your email adress"></input>
                      <button onClick={emailSubmit} className="btn btn-success">
                        send
                      </button>
                    </div>
                    <small style={{ "margin-top": "4px" }}>
                      You can also download my{" "}
                      <a href="https://drive.google.com/drive/folders/1b2_6JwyAzeHAVl6t4kOMQCk60pUEfHEV?usp=sharing">
                        CV
                      </a>
                    </small>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ "z-index": "5", "position": "relative", "display": "inline-flex"}}>
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
                    <p
                      className="codeDemoHome"
                      style={{ "margin-left": "15px" }}
                    >
                      {" "}
                      <span style={{ color: "#00f3ff" }}>const </span>
                      <span className="variables">submit</span>
                      <span className="tagsHTML"> =</span>
                      {"  ( )=>{dispatch (greetUser( ))}"}
                    </p>
                    <p
                      className="codeDemoHome"
                      style={{ "margin-left": "30px" }}
                    >
                      <span className="tagsHTML">return </span>
                      <span className="parentDemo">{"("}</span>
                    </p>
                    <p
                      className="codeDemoHome"
                      style={{ "margin-left": "45px" }}
                    >
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
                      style={{
                        "margin-left": "45px",
                        color: "rgb(255, 81, 0)",
                      }}
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
                  <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                    <div className="inputsHomeDemo">
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
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img src={designSecondbyHome} alt="nf" /> */}
      </div>
    </div>
  );
}
