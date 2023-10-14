import React from "react";
import mascot_desktop from "../../../images/mascot_desktop.svg";
import signUpButton from '../../../images/icons/signupButton-Regular.svg'
import { Link } from "react-scroll";
import './section_1.css'
export default function SectionOne() {
  return (
    <div className='section-1-container'>
    <div className='section-1-text-container'>
      <p className='section-1-text-header'>Join the waitlist</p>
      <p className='section-1-text-body'>We’re stirring up quite a buzz with our mobile app currently in development. Join millions like you who are excited to improve the way you speak languages. </p>
      <p className='section-1-text-body'>Sign up to be notified when our mobile app is available for download!</p>
      <div className='section-1-button-container'>
        <Link to='connect-with-us'><img className='section-1-signup-button' src={signUpButton} alt="" /></Link>
        <a className='section-1-thoughts-button' href="#connect-with-us"><Link to='connect-with-us'>Share your thoughts</Link></a>
      </div>
    </div>
    <div className='section-1-mascot-container'>
      <img className='section-1-mascotSVG'src={mascot_desktop} alt="Mascot_svg" />
    </div>
  </div>
  );
} 