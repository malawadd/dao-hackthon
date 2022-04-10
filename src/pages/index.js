import * as React from "react";
import '../index.css'
import landing_page from "../images/landing_page.png";
import grid from "../images/grid.svg";

import bookcase from '../images/bookcase.svg';
import hsign from '../images/hanging sign.png';
import button_sticker from '../images/button_sticker.svg';
import sign from '../images/sign.png';

import About from "../components/About";
import Tracks from "../components/Tracks";
import Faq from "../components/Faq";
import Sponsors from "../components/Sponsors";

// styles
const pageStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#DDBC9B",
  backgroundImage: 'url(' + grid + ')'
};

const navStyles = {
  backgroundColor: "#A47556",
  border: "2px solid #FBAD24",
  margin: "0",
};

const navLinkStyles = {
  padding: "0.5em 1em",
  fontSize: "1.5em",
  color: "white",
  textDecoration: "none",
};

// markup
const IndexPage = () => {
  let now = Date.now();
  // make a date for June 17, 2022
  let endDate = new Date(2022, 5, 17);
  let timeLeft = endDate - now;
  let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  console.log(daysLeft);
  return (
    <main style={pageStyles}>
      <title>EzraDao</title>
      {/* top image */}
      <img src={landing_page} alt="placeholder" width="100%" />
      {/* <img src={sign} alt="" style={{position: 'absolute', width: '14.5vw', top: '34.8vw', left: '5.5vw'}} /> */}
      {/* <span style={{position: 'absolute', 
                    fontSize: '1.3vw', 
                    top: '36.8vw', 
                    left: '8.8vw', 
                    color: 'white', 
                    transform: 'rotateY(358deg) rotateZ(352deg)', 
                    textAlign: 'center', 
                    lineHeight: '2vw'}}
                    >June 17-19<br />&nbsp;11AM-11PM<br />&nbsp;&nbsp;EST<br />&nbsp;&nbsp;&nbsp;<u>Days Left</u><br /><span style={{color: 'white', fontSize: '2vw', display: 'block', marginTop: '0.7vw'}}>&nbsp;&nbsp;&nbsp;{daysLeft}</span>
      </span> */}

      {/* navbar */}
      <nav style={navStyles}>
        <div id='nav-lg' style={{display: 'flex', justifyContent: "center"}}>
          <a href="#about" style={navLinkStyles}>
            about
          </a>
          <a href="#tracks" style={navLinkStyles}>
            Benefits
          </a>
          <a href="#faq" style={navLinkStyles}>
            faqs
          </a>
          {/* <a href="#sponsors" style={navLinkStyles}>
            sponsors
          </a> */}
          <a href="#apply" style={navLinkStyles}>
            apply
          </a>
        </div>

        {/* <div id='nav-sm' style={{justifyContent: "center", alignItems: 'center'}}>
          <a href="#about" style={navLinkStyles}>
            about
          </a>
          <img src={hamburger} alt="menu" style={{width: '1.75rem'}} />
        </div> */}
      </nav>

      {/* about */}
      <About />

       {/* tracks */}
       <Tracks />

       {/* faq */}
       <Faq />

       {/* Sponsors
       <Sponsors /> */}

       {/* Apply */}
       <div id='apply'>
         {/* left bookcase */}
         <img src={bookcase} alt="bookcase" id='left-bookcase' />
         {/* right bookcase */}
         <img src={bookcase} alt="bookcase" id='right-bookcase' />
          {/* hanging sign */}
         <img src={hsign} alt="hanging sign" id='hanging-sign' />
        {/* apply today button */}
         <span id='apply-today' className='poppins-bold'>
           APPLY<br />TODAY!
         </span>

         <div id='apply-btn' onClick={() => window.location.href = 'apply.page'}>
           <img src={button_sticker} alt="" style={{width: '15rem'}} />
           <span style={{
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
              fontSize: '2.5rem',
              color: '#543E2E'
            }} >
              apply
           </span>
         </div>
       </div>

       {/* Footer */}
       <div style={{
         width: '100%',
         padding: '1rem 0',
         textAlign: 'center',
         fontSize: '1rem',
         color: 'white',
         background: '#A47556'
       }}>
         EzraDao 2022
       </div>
    </main>
  );
};

export default IndexPage;
