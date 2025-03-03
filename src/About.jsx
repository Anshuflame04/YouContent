import React, { useEffect } from 'react';
import './About.css';
import anshuPhoto from './assets/anshu.jpg';

const About = () => {
  useEffect(() => {
    const photo = document.querySelector('.profile-photo');
    let direction = 1;
    let position = 0;

    const animatePhoto = () => {
      if (position >= 10 || position <= -10) direction *= -1; // Reverse direction at limits
      position += direction * 0.2; // Increment position
      photo.style.transform = `translateY(${position}px)`;
      requestAnimationFrame(animatePhoto); // Repeat animation
    };

    animatePhoto();
  }, []);

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src={anshuPhoto} alt="Anshuman Ray" className="profile-photo" />
      <p className="about-paragraph">
        Hello! I'm Anshuman Ray, a passionate B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning. 
        <br />
        I have experience in NLP, Image Processing, and I love exploring innovative solutions to complex problems. 
        <br />
        Always eager to learn, collaborate, and create impactful tech solutions.
      </p>
      <h2 className="about-name"><strong>CONNECT WITH ME</strong></h2>
      <p className="about-detail">
        <strong>Email:</strong> <a href="mailto:anshuflame242@gmail.com">anshuflame242@gmail.com</a>
      </p>
      <p className="about-detail">
        <strong>LinkedIn:</strong>{' '}
        <a
          href="https://www.linkedin.com/in/anshuman-ray-266060268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/anshuman-ray
        </a>
      </p>
      <p className="about-detail">
        <strong>Instagram:</strong>{' '}
        <a
          href="https://instagram.com/anshu_flame_04"
          target="_blank"
          rel="noopener noreferrer"
        >
          anshu_flame_04
        </a>
      </p>
    </div>
  );
};

export default About;
