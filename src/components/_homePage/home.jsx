import React,{ useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import TopMenu from '../global/components/nav/navbar';
import SectionOne from './section_1/section_1';
import SectionTwo from './section_2/section_2';
import SectionThree from './section_3/section_3';
import SectionFour from './section_4/section_4';
import SectionFive from './section_5/section_5';
import ConnectionButtons from '../global/components/connectButtons/connectionButtons';
import Waitlist from '../global/components/waitlist/waitlist';
import Footer from '../global/components/footer/footer';
import "./home.css";
export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    // Scroll to the target div when the component mounts
    if (hash) {
      scroll.scrollTo(hash.slice(1), {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, [hash]);
  return (
    <div className='main-body-container'>
      <TopMenu page={'home'} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <ConnectionButtons />
      <Waitlist />
      <Footer />
    </div>
  );
}