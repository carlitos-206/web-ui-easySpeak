import React from "react";
import "./section_2.css";
export default function SectionTwo() {
  return (  
    <div className="section-2-container">
      <div className="section-2-content-container">
          <div className="section-2-content-header">
            <p>Speaking made easy</p>
          </div>
          <div className="section-2-content-text">
            <p>watch why we created EasySpeak and how we're here to help</p>
            <p>improve your pronunciation</p>
          </div>
          <div className="section-2-content-video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JKrl3a2A5JI?si=0EtzX1JB5hYMPKre" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
      </div>
    </div>
  )
}