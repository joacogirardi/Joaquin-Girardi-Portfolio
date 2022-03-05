import React from "react";
import { Link } from "react-router-dom";
import certificate_cisco_girardi from '../../contents/media/certificate_cisco_girardi.jpg'
import Henry_certificate from '../../contents/media/Henry_certificate.jpg'
import EF_SET_Certificate from '../../contents/media/EF_SET_Certificate.jpg'
import './ContCert-module.css'

export default function ContCert() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div style={{ "margin-top": "8pc" }}>
              <h2 className="TitleCert">Certificates and academic progress</h2>
              </div>
              <div className="certificatesCont">
                  <img className="imgCert" src={certificate_cisco_girardi} alt='certificate' />
                  <a href='https://certificates.soyhenry.com/cert?id=6f453d27-38b5-4063-94f6-4ef8b6cb5fcb'><img className="imgCert" src={Henry_certificate} alt='certificate2' /></a>
                  <a href="https://www.efset.org/cert/2u9rPq"><img className="imgCert" src={EF_SET_Certificate} alt="certificate3" /></a>
                  </div>
        </div>
      </div>
    </div>
  );
}
