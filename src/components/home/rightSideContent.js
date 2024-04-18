
// ContentArea.js
import React, { useEffect, useRef, useState } from 'react';
import '../../index.css';
import Links from './links';
import Skills from './skills';
import Education from './education';
import Experience from './experience';
import Banner from './banner';
import About from './about';
import Project from './projects';
import Contact from './contact';


const ContentArea = ({ setActiveItem, activeItem }) => {

  const itemRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
    6: useRef(null),
    7: useRef(null),
    8: useRef(null),
  };


  const [hasBeenVisible, setHasBeenVisible] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        const { isIntersecting, target } = entry;
        if (isIntersecting && !hasBeenVisible[target.dataset.index]) {
          const itemIndex = parseInt(target.dataset.index);
          setActiveItem(itemIndex);
          setHasBeenVisible((prevState) => ({
            ...prevState,
            [itemIndex]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    Object.values(itemRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveItem, hasBeenVisible]);

  return (
    <main style={{ flexGrow: 1 }}>
    <div>
      <div className={`banner-content ${activeItem === 1 || hasBeenVisible[1] ? 'visible' : ''}`} ref={itemRefs[1]} data-index={1} id="content-1">
        <Banner />
      </div>

      <div className={`about-main ${activeItem === 2 || hasBeenVisible[2] ? 'visible' : ''}`} ref={itemRefs[2]} data-index={2} id="content-2">
        <About isVisible={activeItem === 2 || hasBeenVisible[2]} />
      </div>

      <div className={`links-main ${activeItem === 3 || hasBeenVisible[3] ? 'visible' : ''}`} ref={itemRefs[3]} data-index={3} id="content-3">
        <Links isVisible={activeItem === 3 || hasBeenVisible[3]} />
      </div>

      <div className={`skills-main ${activeItem === 4 || hasBeenVisible[4] ? 'visible' : ''}`} ref={itemRefs[4]} data-index={4} id="content-4">
        <Skills isVisible={activeItem === 4 || hasBeenVisible[4]} />
      </div>

      <div className={`education-main ${activeItem === 5 || hasBeenVisible[5] ? 'visible' : ''}`} ref={itemRefs[5]} data-index={5} id="content-5">
        <Education isVisible={activeItem === 5 || hasBeenVisible[5]} />
      </div>

      <div className={`experience-main ${activeItem === 6 || hasBeenVisible[6] ? 'visible' : ''}`} ref={itemRefs[6]} data-index={6} id="content-6">
        <Experience isVisible={activeItem === 6 || hasBeenVisible[6]} />
      </div>

      <div className={`projects-main ${activeItem === 7 || hasBeenVisible[7] ? 'visible' : ''}`} ref={itemRefs[7]} data-index={7} id="content-7">
        <Project isVisible={activeItem === 7 || hasBeenVisible[7]} />
      </div>

      <div className={`contacts-main ${activeItem === 8 || hasBeenVisible[8] ? 'visible' : ''}`} ref={itemRefs[8]} data-index={8} id="content-8">
        <Contact isVisible={activeItem === 8 || hasBeenVisible[8]} />
      </div>
    </div>
  </main>
  );
};

export default ContentArea;
