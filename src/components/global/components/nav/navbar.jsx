import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import mainLogo from "../../../../images/mainLogo.svg"
import globe from "../../../../images/icons/globe.svg"
import downArrow from "../../../../images/icons/downArrow.svg"
import waitListButton from "../../../../images/icons/waitListButton.svg"
import "./navbar.css";

export default function TopMenu({page}) {
  const defaultLanguage = "English";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    return savedLanguage || defaultLanguage;
  });
  
  const languages = ["English", "Spanish"]; 
  languages.sort();
  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);




  const navigator = (e, location) => {
    e.preventDefault();
    if(location ==='return-to-client'){
      window.location.href = "/";
      if(sessionStorage.getItem('admin')){

        let isConfirmed = window.confirm('Are you sure you want to logout?')
        if(isConfirmed){
          sessionStorage.clear();
        }else{
          window.location.href = "/admin";
        }
      }
    }
    if(location ==='about'){
      window.location.href = "/about";
    }
    if(location ==='how'){
      window.location.href = "/";
      localStorage.setItem('scrollTo', 'how-it-works');
    }
    if(location ==='contact'){
      window.location.href = "/";
      localStorage.setItem('scrollTo', 'connect-with-us');
    }if(location ==='index'){
      window.location.href = "/";
    }else{
      return;
    }
  };
  if(page === 'admin'){
    let loggedIn = localStorage.getItem('loggedIn')
    return (
      <div className="navbar-container">
        <div className="navbar-brand indent" onClick={(e)=>{navigator(e, 'return-to-client')}}>
          <img className='navbar-brand-logo indent'src={mainLogo} alt="logo" />
          <p className="navbar-brand-text ">EasySpeak</p>
        </div>
        <div className="navbar-cta">
          <div className="navbar-cta-buttons-container">
            <button className="navbar-cta-buttons about-button" 
              onClick={(e)=>{navigator(e, 'return-to-client')}}>
                Return to Client
                {loggedIn ? 'Logout' : ''}
            </button>
          </div>
          
        </div>
      </div>
    );
  }
  if(page === 'home'){
    return (
      <div className="navbar-container">
        <div className="navbar-brand ">
          <img className='navbar-brand-logo' src={mainLogo} alt="logo" onClick={(e)=>{navigator(e, 'index')}} />
          <p className="navbar-brand-text " onClick={(e)=>{navigator(e, 'index')}}>EasySpeak</p>
        </div>
        <div className="navbar-cta">
          <div className="navbar-cta-buttons-container">
            <button className="navbar-cta-buttons how-button" ><Link to="how-it-works">How it works</Link></button>
            <button className="navbar-cta-buttons contact-button" ><Link to='connect-with-us'>Contact</Link></button>
            <button className="navbar-cta-buttons about-button" 
              onClick={(e)=>{navigator(e, 'about')}}>
                About
            </button>
            <Link to="waitlist"><img className='navbar-cta-waitlist-button waitlist-button' src={waitListButton} alt='Join Waitlist' /></Link>
          </div>
          {/* <button className='navbar-cta-globe-button globe-button'  
            onClick={() => setIsOpen(!isOpen)} 
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
          >
            <img src={globe} alt="globe" />
            <img src={downArrow} alt="down" />
            <span className='navbar-selected-language selected-lang'>{selectedLanguage}</span>
            {isOpen && (
              <div className="dropdown-menu">
                {languages
                  .filter(language => language !== selectedLanguage)
                  .map((language) => (
                    <div 
                    className='language-dropdown'
                      key={language} 
                      onClick={() => {
                        setSelectedLanguage(language);
                        window.location.reload()
                      }}
                    >
                      {language}
                    </div>
                ))}
              </div>
            )}
          </button> */}
        </div>
      </div>
    );
  }
  if(page === 'about'){
    return (
      <div className="navbar-container">
        <div className="navbar-brand indent">
          <img className='navbar-brand-logo indent'src={mainLogo} alt="logo" onClick={(e)=>{navigator(e, 'index')}} />
          <p className="navbar-brand-text " onClick={(e)=>{navigator(e, 'index')}}>EasySpeak</p>
        </div>
        <div className="navbar-cta">
          <div className="navbar-cta-buttons-container">
            <button className="navbar-cta-buttons how-button" onClick={(e)=>{navigator(e, 'how')}}>How it works</button>
            <button className="navbar-cta-buttons contact-button" ><Link to='connect-with-us'>Contact</Link></button>
            <button className="navbar-cta-buttons about-button" onClick={(e)=>{navigator(e, 'about')}}>About</button>
          </div>
            <Link to="waitlist"><img className='navbar-cta-waitlist-button waitlist-button' src={waitListButton} alt='Join Waitlist' /></Link>
          {/* <button className='navbar-cta-globe-button globe-button'  
            onClick={() => setIsOpen(!isOpen)} 
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
          >
            <img src={globe} alt="globe" />
            <img src={downArrow} alt="down" />
            <span className='navbar-selected-language selected-lang'>{selectedLanguage}</span>
              {isOpen && (
                <div className="dropdown-menu">
                  {languages
                    .filter(language => language !== selectedLanguage)
                    .map((language) => (
                      <div 
                        className='language-dropdown'
                        key={language} 
                        onClick={() => {
                          setSelectedLanguage(language);
                          window.location.reload()
                        }}
                      >
                    {language}
                  </div>
                ))}
              </div>
            )}
          </button> */}
        </div>
      </div>
    );
  }
}
