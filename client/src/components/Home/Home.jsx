import React from "react";
import Navbar from "../Navbar/Navbar";
import TextMiddle from "./TextMiddle";
import WhoAmI from "./WhoAmI";
import PhraseBox from "./PhraseBox";
import ProyCont from "../Proyects/ProyCont";
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
        <PhraseBox
          title={"Joaquin Girardi"}
          subTitle={"FULL STACK WEB DEVELOPER"}
        />
        <WhoAmI />
        <div id="proyects"></div>
        <PhraseBox title={"ProJects"} subTitle={"Some of my work"} />
        <div className="betweenComp"> </div>
        <ProyCont />
        {/* <div className="betweenCompEnd"> </div> */}
        <div className="betweenCompEnd">
          <a href="#top">
            <button className="btn btn-primary">Go top</button>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}
