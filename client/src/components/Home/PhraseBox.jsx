import React from "react";
import "./PhraseBox-module.css";

export default function PhraseBox(props) {
  return (
    <div id="AboutMe">
      <div className="PhraseBoxHome">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <div className="phraseEffect">
              <h1 className="PhraseSecondScreen">{props.title}</h1>
            </div>
            <h4 className="subTitleMain">{props.subTitle}</h4>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
