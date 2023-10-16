import React from 'react';
import './section_2.css';
import andrea from "../../../images/team/andrea.svg";
import ali from "../../../images/team/ali.svg";
import aldrich from "../../../images/team/aldrich.svg";
import carlos from "../../../images/team/carlos.svg";
import empty from "../../../images/team/empty.svg";

export default function SectionTwo() {
  return (
    <div className="about-section-2-container">
      <div className='about-section-2-content-container'>
        <div className='about-section-2-content-header'>
          <p>EasySpeak Team</p>
        </div>
        <div className='about-section-2-content-block'>
          <div className='team-block' id='team-block-andrea'>
            <img className='team-member-profile' src={andrea} alt="Andrea" />
            <p className='team-block-name'>Andrea Aguilera</p>
            <p className='team-block-title'>Co-Founder, Chief Executive Officer</p>
          </div>
          {/* <div className='team-block' id='team-block-ali'>
            <img className='team-member-profile' src={ali} alt="Andrea" />
            <p className='team-block-name'>Ali Khosro</p>
            <p className='team-block-title'>Co-Founder, Chief Technical Officer</p>
          </div> */}
          <div className='team-block' id='team-block-aldrich'>
            <img className='team-member-profile' src={aldrich} alt="Andrea" />
            <p className='team-block-name'>Aldrich Lapid</p>
            <p className='team-block-title'>Co-Founder, Chief Design Officer</p>
          </div>
          
          <div className='team-block' id='team-block-carlos'>
            <img className='team-member-profile' src={carlos} alt="Andrea" />
            <p className='team-block-name'>Carlos Caceres</p>
            <p className='team-block-title'>Software Engineer</p>
          </div>

        </div>
        {/* <div className='about-section-2-content-block'>
          <div className='team-block' id='team-block-carlos'>
            <img className='team-member-profile' src={carlos} alt="Andrea" />
            <p className='team-block-name'>Carlos Caceres</p>
            <p className='team-block-title'>Software Engineer</p>
          </div>
          <div className='team-block' id='team-block-carlos'>
            <img className='team-member-profile' src={empty} alt="Andrea" />
            <p className='team-block-name_empty_'>_empty_</p>
            <p className='team-block-title_empty_'>Co-Founder, Chief Design Officer</p>
          </div>
          <div className='team-block' id='team-block-carlos'>
            <img className='team-member-profile' src={empty} alt="Andrea" />
            <p className='team-block-name_empty_'>_empty_</p>
            <p className='team-block-title_empty_'>Co-Founder, Chief Design Officer</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}