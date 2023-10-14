import React from "react";
import './reviews.css'
import userIcon from "../../../../images/icons/user.svg"
export default function Reviews() {
  return (
    <div className="reviews-container">
      <div className="reviews-title">
        <p>Reviews</p>
      </div>
      <div className="reviews-content">
        <div className="reviews-content-block">
          <img className='reviews-user-icon' src={userIcon} alt="user-icon" />
          <p className="reviews-user-fullName">Susie Heisenberg</p>
          <p className="reviews-user-occupation">English Teacher</p>
          <p className="reviews-user-text">“EasySpeak will change how language learners learn languages. I’ve seen many learners struggle with their pronunciation. I’m so happy there is a tool out there that will help with this problem. I can’t wait to try this app!”</p>
        </div>
        <div className="reviews-content-block">
          <img className='reviews-user-icon' src={userIcon} alt="user-icon"/>
          <p className="reviews-user-fullName">Camille Dupont</p>
          <p className="reviews-user-occupation">International Student</p>
          <p className="reviews-user-text">“I’ve always been insecure with the way I speak. It’s hard enough trying to adapt to a new environment and with EasySpeak, this app has will help me so much in the way I speak.”</p>
        </div>
        <div className="reviews-content-block">
          <img className='reviews-user-icon' src={userIcon} alt="user-icon"/>
          <p className="reviews-user-fullName">Park Jae-hoon</p>
          <p className="reviews-user-occupation">Business worker</p>
          <p className="reviews-user-text">“I am starting a new job in the United States, but my English isn’t very good. EasySpeak will help me speak more fluently so that I can perform better at my job and open more opportunities in my career.”</p>
        </div>
      </div>
    </div>
  );
}
