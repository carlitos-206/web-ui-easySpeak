import React from "react";
import {  Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet';


// Components imports
import Admin from "./components/global/database/firebase/admin/admin";

import Home from "./components/_homePage/home";
import About from "./components/_aboutPage/about";



function App() {
  // This is the website admin page
  const AdminPage = () => {
    return (
      <div>
        <Helmet>
          <title>EasySpeak | Admin</title>
        </Helmet>
        <Admin />
      </div>
    )
  }

  // This is the website home page
  const HomePage = () => {
    let scrollTo = localStorage.getItem('scrollTo');
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo).scrollIntoView();
        localStorage.removeItem('scrollTo');
      }, 100);
    }
    return (
      <div>
        <Helmet>
          <title>EasySpeak | Welcome</title>
        </Helmet>
        <Home />
      </div>
    )
  }

  // This is the website about page
  const AboutPage = () => {
    return (
      <div>
        <Helmet>
          <title>EasySpeak | About</title>
        </Helmet>
        <About />
      </div>
    )
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<HomePage />} />
        
      </Routes>
    </div>
  );
}

export default App;
