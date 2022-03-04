import React from "react";
import Navbar from "../Navbar/Navbar";
import TextMiddle from "./TextMiddle";
import "./Home-module.css";

export default function Home() {
  return (
    <div className="homeMainPage">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TextMiddle />
          </div>
        </div>
      </div>
    </div>
  );
}
