import React from "react";
import './TextMiddle-module.css'

export default function TextMiddle() {
  return (
    <div style={{ "margin-top": "15pc" }}>
      <div className="container">
        <div className="row">

          <div className="col-4">
              <h1 className="txtMP">Welcome guest</h1>
            <div className="mainScreenText">
              <small className="txtMP">
                This is my personal portfolio
                Feel free to watch it<br />I hope you enjoy it
              </small>
            </div>
          </div>

            <div className="col-1"></div>
            <div className="col-7">
                <div className="designMainPage">
                    {/* <p className='defineShape'></p> */}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
