import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProyCont from './ProyCont'
import "./Proyects-module.css";

export default function Proyects() {
  return (
    <div className="mainContProy">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <ProyCont />
          </div>
        </div>
      </div>
      <div style={{"margin-top":"10pc"}}></div>
      <Footer />
    </div>
  );
}
