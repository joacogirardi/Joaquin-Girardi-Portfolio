import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContCert from "./ContCert";
import { Link } from "react-router-dom";
import "./Certificates-module.css";

export default function Certificates() {
  return (
    <div className="MainDivCertificates">
      <Navbar />

      <div className="container contCertificates">
        <div className="row">
          <div className="col-12">
            <ContCert />
          </div>
        </div>
      </div>
      <div>
          <Link to='/'><button className="btn btn-info">Back Home</button></Link>
      </div>
      <div style={{"margin-top":"10pc"}}></div>
      <Footer />
    </div>
  );
}
