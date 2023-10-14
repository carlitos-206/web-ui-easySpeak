import React from "react";
import "./excersises.css";

import excersisesPhone from "../../../../images/excersisesphone.svg"
export default function Excersises() {
  return (
    <div className="excersises-container">
      <div className="excersises-content-container">
        <div className="excersises-body-container">
          <div className="excersises-body-header">
            <p className="excersises-body-header" >Personalized pronunciation exercises</p>
          </div>
          <div className="excersises-body-text">
            <p className="excersises-body-text">EasySpeak offers personalized pronunciation exercises that cater to your specific needs. </p>
            <p className="excersises-body-text">We customize a series of exercises designed to target the areas where improvement is most beneficial for you. As you progress, the exercises evolve with you, ensuring a dynamic and effective learning journey.</p>
          </div>
        </div>
        <div className="excersises-phone-container">
          <img src={excersisesPhone} alt="Phone Camera Sample" />
        </div>
      </div>
    </div>
  );
}