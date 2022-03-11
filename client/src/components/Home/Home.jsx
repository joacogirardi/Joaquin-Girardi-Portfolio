import React from "react";
import Navbar from "../Navbar/Navbar";
import TextMiddle from "./TextMiddle";
import WhoAmI from "./WhoAmI";
import PhraseBox from "./PhraseBox";
import ProyCont from "../Proyects/ProyCont";
import ContCert from "../Certificates/ContCert";
import Footer from "../Footer/Footer";
import purpleBgHome from "../../contents/media/purpleBgHome.jpg";
import arrowTop from '../../contents/media/arrowTop.png'
import "./Home-module.css";

export default function Home() {
  
  function scrollFunction() {
    const mybutton = document.getElementById("myBtn")
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  window.onscroll = ()=> scrollFunction();

  return (
    <>
      <div className="homeMainPage" id="top">
        <Navbar />
        <a href="#top" id="myBtn" title="Go to top"><img style={{"width":"32px","height":"25px"}} src={arrowTop} alt='top'/></a>
        <div
          style={{
            background: `url(${purpleBgHome})`,
            "background-size": "cover",
          }}
          className="BGMainHome"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <TextMiddle />
              </div>
            </div>
          </div>
          <div className="betweenComp"></div>
          <PhraseBox
            title={"Joaquin Girardi"}
            subTitle={"FULL STACK WEB DEVELOPER"}
          />
        </div>
        <div className="homeMainAbout">
          <WhoAmI />
          <div id="proyects"></div>
          <PhraseBox title={"ProJects"} subTitle={"Some of my work"} />
        </div>
        <div className="betweenComp"> </div>
        <ProyCont />
        <div className="betweenComp"> </div>
        <PhraseBox
          title={"Certificates"}
          subTitle={"Certificates and academic progress"}
        />
        <div id="certificates" className="betweenCompEnd">
          <ContCert />
        </div>
        <Footer />
      </div>
    </>
  );
}
