import React from "react";
import TopMenu from '../global/components/nav/navbar';
import SectionOne from "./section_1/section_1";
import SectionTwo from "./section_2/section_2";
import ConnectionButtons from "../global/components/connectButtons/connectionButtons";
import Waitlist from "../global/components/waitlist/waitlist";
import Footer from "../global/components/footer/footer";
export default function About() {
  return (
    <div>
      <TopMenu page ={'about'}/>
      <SectionOne />
      <SectionTwo />
      <ConnectionButtons />
      <Waitlist />
      <Footer />
    </div>
  );
}