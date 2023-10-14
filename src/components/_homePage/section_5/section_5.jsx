import React from "react";
import "./section_5.css";
import Team from "./a_team/team";
import Reviews from "./b_reviews/reviews";
export default function SectionFive() {
  return (
    <div className="section-5-container">
      <Team />
      <Reviews />
    </div>
  );
}