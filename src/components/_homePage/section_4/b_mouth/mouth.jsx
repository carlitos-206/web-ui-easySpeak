import React from "react";
import "./mouth.css";

import mouthPhone from "../../../../images/mouthphone.svg"
export default function Mouth() {
  return (
    <div className="mouth-container">
      <div className="mouth-content-container">
        <div className="mouth-phone-container">
          <img className="mouth-phone-svg" src={mouthPhone} alt="Phone Camera Sample" />
        </div>
        <div className="mouth-body-container">
          <div className="mouth-body-header">
            <p className="mouth-body-header" >Mouth movement feedback</p>
          </div>
          <div className="mouth-body-text">
            <p className="mouth-body-text">EasySpeak refines your pronunciation through detailed mouth feedback. Our technology precisely analyzes your mouth movements as you speak, providing real-time guidance and correction.</p>
            <p className="mouth-body-text">This tailored feedback empowers you to visually understand and adapt the subtleties of pronunciation, ensuring that your language skills advance with accuracy and fluency.</p>
          </div>
        </div>
      </div>
    </div>
  );
}