import React from "react";
import "./section_1.css";
import TeamPhoto from "../../../images/team/teamPhoto.svg"
export default function SectionOne(){
  return(
    <div className="about-section-one-container">
      <div className="about-section-one-left-content">
        <div className="about-section-one-left-content-header">
          <p>Our Story</p>
        </div>
        <div className="about_section-one-left-content-body">
          <p className="about_section-one-left-content-body-text">EasySpeak was formed through a shared vision of making language learning pronunciation more accessible and easy to learn for everyone. </p>
          <p className="about_section-one-left-content-body-text">We recognized that there is a gap in the way pronunciation is taught and we wanted to take action and empower individuals worldwide to achieve native-like proficiency through an innovative and personalized AI-powered platform that provides visual and voice feedback, fostering effective communication and cultural understanding.</p>
        </div>
      </div>
      <div className="about-section-one-right-content">
        <div className="about-section-one-right-content-body">
          <img className="about-section-team-photo"src={TeamPhoto} alt='team' />
          <p>Leaner Startups AI Hackathon 2.0 at SURF Incubator, 2023</p>
        </div>
      </div>
    </div>
  )
}