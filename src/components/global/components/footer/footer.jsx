import React from "react";
import './footer.css';
import envelope from "../../../../images/icons/email-white-clear.svg"
import linkedin_clear from "../../../../images/icons/linkedin-white-clear.svg"
import { linkConnectionSendOff } from "../../functions/functions.js";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container-content">
        <div className="footer-container-content-left">
          <p className="footer-container-left-title">EasySpeak</p>
          <p className="footer-container-left-subtitle">How can we help?</p>
          <p className="footer-container-left-text">at EasySpeak, we are</p>
          <p className="footer-container-left-text">committed to helping you</p>
          <p className="footer-container-left-text">improve your pronunciation</p>
          <p className="footer-container-left-bottom">© 2023 EasySpeak, Inc. All Rights Reserved.</p>
        </div>
        <div className="footer-container-content-right">
          <div className="footer-right-icon-container">
              <img className="footer-right-icon" onClick={(e)=>{linkConnectionSendOff(e,"", 'LinkedIn' )}} src={linkedin_clear} alt="LinkedIn" />
              <img className="footer-right-icon" onClick={(e)=>{linkConnectionSendOff(e,"", 'Email' )}} src={envelope} alt="Email" />
          </div>
          <div className="footer-text-container">
            <p className="footer-container-right-text">Speaking made easy</p>
          </div>
        </div>
      </div>
    </div>
  );
}