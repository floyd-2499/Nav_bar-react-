import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "../icon/logo.png";

const Navbar = () => {
  // display flex and display none in css use for navbar links and button
  // note use it in like @media(max-width: ....) ok

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

//   useEffect(() => { didnot work so leave it
//       const linksHeight = linksRef.current.getBoundingClientRect()
//       console.log(linksHeight)
//       if (showLinks){
//           linksContainerRef.current.style.height = `${linksHeight}px`
//       }
//       else {
//           linksContainerRef.current.style.height ='0px'
//       }
//   },[showLinks])
 
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* setting condition for below links */}
        {/* below line is like if showlinks is true then (&&) display div */}
        {showLinks && (

        //first try   <div className="links-container show-container">
             // for above         {/* used 2 class cz for 1 if display is w/o media query.. if media query is used then 1st class display=none and second class style css /// i hope you got it */} 

             // new try
        //   <div className={`${showLinks?'links-container show-container':'links-container'}`}>
        
        
        <div className='links-container '/*ref={linksContainerRef}*/>
            <ul className="links" /*ref={linksRef}*/>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <ul className="social-icons">
          {social.map((socialicon) => {
            const { id, url, icon } = socialicon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
