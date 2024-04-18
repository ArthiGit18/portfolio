
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Links = ({ isVisible }) =>{
      // Links
  const [ref, inView] = useInView();
  const linksRef = useRef(null);

    return(
        <>
         <small >
            Website
          </small>

          <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>PROFILES AND LINKS</h2>
          <div className={`links-content ${isVisible ? 'slide-from-left' : ''}`} ref={linksRef} style={{ display: "flex", justifyContent: "space-between", height: "250px" }}>
            <div className="links">
              <img src="/assets/logo/pngimg.com - github_PNG28.png" alt="GitHub" style={{ height: "100px", width: "" }} />
              <p style={{ margin: "" }}>GitHub</p>
              <p>show my id</p>
            </div>

            <div className="links">
              <img src="/assets/logo/pngimg.com - github_PNG28.png" alt="GitHub" style={{ height: "100px", width: "" }} />
              <p>GitHub</p>
              <p>show my id</p>
            </div>

            <div className="links">
              <img src="/assets/logo/pngimg.com - linkedIn_PNG27.png" alt="GitHub" style={{ height: "100px", width: "" }} />
              <p>GitHub</p>
              <p>show my id</p>
            </div>

            <div className="links">
              <img src="/assets/logo/leetcode (1).png" alt="GitHub" style={{ height: "100px", width: "" }} />
              <p>GitHub</p>
              <p>show my id</p>
            </div>
          </div>
          </>
    )
}

export default Links;