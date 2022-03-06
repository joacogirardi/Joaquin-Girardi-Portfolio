import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProyCont from './ProyCont'
import { Link } from "react-router-dom";
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
      <div>
          <Link to='/'><button style={{"margin-top":"5pc"}} className="btn btn-info">Back Home</button></Link>
      </div>
      <div style={{"margin-top":"5pc"}}></div>
      <Footer />
    </div>
  );
}
