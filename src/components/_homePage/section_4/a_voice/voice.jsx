import React from "react";
import "./voice.css";
import audioSample from "./files/placeholder-audio.mp3"

import voiceIcon from "../../../../images/icons/voice.svg"


export default function Voice() {
  const audio = new Audio(audioSample);
  const playAudio = (e) => {
    audio.play();
  }


  return (
    <div className="voice-container">
      <div className="voice-content">

        <div className="voice-content-block block-1">
          <div className="voice-content-block-header">
            <p>Voice feedback</p>
          </div>
          <div className="voice-content-block-body">
            <p className="voice-content-block-body-text">EasySpeak listens to your unique voice and processes the different components needed to improve your pronunciation in real time.</p>
            <p className="voice-content-block-body-text">We guide you to communicate with confidence and precision; offering a comprehensive feedback system that evaluates your tone, rhythm, and pitch as you speak.</p>
          </div>
        </div>

        <div className="voice-content-block block-2">
          <img className="voice-content-block-img voice-cursor" src={voiceIcon} onClick={(e)=>{playAudio(e)}} alt="Voice Feedback Sample" />
          <p className="voice-content-block-text voice-cursor" onClick={(e)=>{playAudio(e)}} >Click me</p>
        </div>
      </div>
    </div>
  );
}

