import React from 'react';
import '../../index.css';

const About = ({ isVisible }) => {
  return (
    <div className={`about-content ${isVisible ? 'slide-from-left' : ''}`}>
      <small>
        about
      </small>

      <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>ABOUT ME</h2>
      <p style={{ lineHeight: "30px" }}>
        Enthusiastic and results-oriented web developer with a passion for crafting visually appealing and user-friendly
        websites. Leveraging expertise in <strong>HTML, CSS, JavaScript, and various web development frameworks,</strong> I aim to contribute
        to dynamic projects that push the boundaries of innovation. Seeking a challenging role where I can utilize my skills to
        deliver high-quality, scalable solutions, and collaborate with a talented team to drive impactful results in the ever-evolving landscape of web development.
      </p>
    </div>
  )
}

export default About;
