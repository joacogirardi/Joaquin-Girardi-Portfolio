import React from "react";
import Navbar from "../Navbar/Navbar";
import TextMiddle from "./TextMiddle";
import WhoAmI from "./WhoAmI";
import PhraseBox from "./PhraseBox";
import Footer from "../Footer/Footer";
import "./Home-module.css";

export default function Home() {
  return (
    <>
      <div className="homeMainPage" id="top">
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <TextMiddle />
            </div>
          </div>
        </div>

        <div className="betweenComp"> </div>

        <PhraseBox />

        <WhoAmI />

        <Footer />
      </div>
    </>
  );
}
