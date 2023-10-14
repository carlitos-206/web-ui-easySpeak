import React from "react";
import "./section_4.css";
import Voice from "./a_voice/voice";
import Mouth from "./b_mouth/mouth";
import Excersises from "./c_excersises/excersises";
export default function SectionFour() {
  return (
    <div className="section-four-container">
      <Voice />
      <Mouth />
      <Excersises />
    </div>
  );
}