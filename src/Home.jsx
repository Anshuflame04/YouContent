import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import fanIcon from './assets/fan.png'; // Import the icon

const YouContent = () => {
  const navigate = useNavigate();

  const goToTools = () => {
    navigate('/tools'); // Assuming '/tools' is the route for Tools.jsx
  };

  return (
    <div className="home">
      <h1 className="title">
        Welcome to YouContent
        <img src={fanIcon} alt="Fan Icon" className="fan-icon" />
      </h1>
      <p className="tagline">
        Your ultimate tool to transform ideas into engaging, high-quality content with ease.
      </p>
      <p>
        Whether you're a content creator, a business owner, or just someone with an idea,
        we've got you covered. Use our AI-powered tools to craft blog posts, articles, social media captions, and more in seconds.
      </p>
      <div className="features">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🚀 Quick and efficient content generation</li>
          <li>🎨 Tailored content for your specific audience</li>
          <li>💡 Multiple platforms supported, including blogs, Twitter, LinkedIn, and more</li>
          <li>🔒 Secure and private—your data is safe with us</li>
        </ul>
      </div>
      <button className="start-creating-btn" onClick={goToTools}>
        Start Creating Now
      </button>
      <footer className="footer">
        <p>&copy; 2025 YouContent. No rights reserved.</p>
        <p>Created by AnshuFlame</p>
      </footer>
    </div>
  );
};

export default YouContent;
