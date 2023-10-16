import React from "react";
import "./team.css";

export default function Team() {
  return (
    <div className="team-container">
      <p className="team-intro">“We are proud to introduce our <span className="team-highlight">revolutionary</span> language learning app that harnesses the latest in AI technology. Speaking with your own <span className="team-highlight">unique voice</span>, our app will guide you towards mastering foreign languages and improving your pronunciation.”</p>
      <p className="team-name">EasySpeak Team</p>
    </div>
  );
}