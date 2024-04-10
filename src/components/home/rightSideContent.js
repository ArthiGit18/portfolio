
// ContentArea.js
import React, { useRef, useEffect } from 'react';
import '../../index.css';

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
    // Add more refs for other items if needed
  };

  console.log("Active item:", activeItem);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        const { isIntersecting, target } = entry;
        if (isIntersecting) {
          const itemIndex = parseInt(target.dataset.index);
          setActiveItem(itemIndex);
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
  }, [setActiveItem]);

  return (
    <main
      style={{
        flexGrow: 1,
        // padding: '20px',
        overflowY: 'scroll',
        // marginLeft: '240px', // Adjusted padding to accommodate sidebar
      }}
    >
      <div style={{ height: '1000px' }}>
      
        <div className='banner-content' ref={itemRefs[1]} data-index={1} id="content-1">
          <div className='banner-about'>
            <h2 style={{ fontSize: "80px" }}> Hi! <br></br>I'm A.Arthi</h2>
            <p>WEB DEVELOPER</p>
            <button>Download CV</button>
          </div>
          <div className='bammer-img' style={{ height: "100vh" }}>
            <img src="/assets/myImg/ammu-4.png" alt="My-Img" />
          </div>
        </div>

        <div className='about-main' ref={itemRefs[2]} data-index={2} id="content-2">
          <small>
            about
          </small>

          <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>ABOUT ME</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
        </div>
        
        <div className='links-main' ref={itemRefs[3]} data-index={3} id="content-3">
          <small >
            Website
          </small>

          <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>PROFILES AND LINKS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
        </div>

        <div className='skills-main' ref={itemRefs[4]} data-index={4} id="content-4">
          <small>
            skills
          </small>

          <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>SKILLS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
        </div>

        <div className='education-main' ref={itemRefs[5]} data-index={5} id="content-5">
          <small>
            Education
          </small>

          <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>SKILLS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
        </div>

        <div className='experience-main' ref={itemRefs[6]} data-index={6} id="content-6">
          <small>
            skills
          </small>

          <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>SKILLS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
        </div>


        <div className='projects-main' ref={itemRefs[7]} data-index={7} id="content-7">
          <small>
            Projects
          </small>

          <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>PROJECTS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
        </div>

        <div className='contacts-main'  ref={itemRefs[8]} data-index={8} id="content-8">
          <small>
            Contact
          </small>

          <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>KEEP IN TOUCH!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
            Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
            rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
            Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
            non eros vestibulum pharetra. Proin vehicula arcu eget libero
            eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
          </p>
        </div>

      </div>
    </main>
  );
};

export default ContentArea;
