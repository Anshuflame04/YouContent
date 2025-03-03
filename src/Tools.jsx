import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaFileAlt, FaYoutube, FaImage, FaCode, FaRobot, 
  FaMagic, FaBriefcase, FaQuestion 
} from 'react-icons/fa'; // Import icons
import './Tools.css';

const Tools = () => {
  const navigate = useNavigate();

  const handleText2ImgClick = () => navigate('/img');
  const handleYouTubeSummarizerClick = () => navigate('/youtube');
  const handleTextToArticleClick = () => navigate('/article');
  const handleTextToCodeClick = () => navigate('/code');
  const handleAIChatbotClick = () => navigate('/chatbot');
  const handleImageEnhancerClick = () => navigate('/image-enhancer');
  const handleResumeBuilderClick = () => navigate('/resume-builder');
  const handleTextToMCQClick = () => navigate('/text2mcq'); // Added Text to MCQ Navigation

  return (
    <div className="tools">
      <h1>AI Tools</h1>
      <div className="tools-grid">
        <div className="tool" onClick={handleTextToArticleClick} role="button" tabIndex="0">
          <FaFileAlt className="tool-icon" />
          <h2>Text to Article</h2>
          <p>Transform your ideas into well-structured articles with AI assistance.</p>
        </div>
        <div className="tool" onClick={handleYouTubeSummarizerClick} role="button" tabIndex="0">
          <FaYoutube className="tool-icon" />
          <h2>YouTube Video Summarizer</h2>
          <p>Summarize YouTube videos into detailed notes effortlessly.</p>
        </div>
        <div className="tool" onClick={handleText2ImgClick} role="button" tabIndex="0">
          <FaImage className="tool-icon" />
          <h2>Text to Image</h2>
          <p>Generate stunning images from your text descriptions.</p>
        </div>
        <div className="tool" onClick={handleTextToCodeClick} role="button" tabIndex="0">
          <FaCode className="tool-icon" />
          <h2>Text to Code</h2>
          <p>Convert natural language into working code snippets.</p>
        </div>
        <div className="tool" onClick={handleAIChatbotClick} role="button" tabIndex="0">
          <FaRobot className="tool-icon" />
          <h2>AI Chatbot</h2>
          <p>Engage with an AI-powered chatbot for instant answers, brainstorming, or casual conversation.</p>
        </div>
        <div className="tool" onClick={handleImageEnhancerClick} role="button" tabIndex="0">
          <FaMagic className="tool-icon" />
          <h2>Image Enhancer</h2>
          <p>Improve the quality of low-resolution images using AI.</p>
        </div>
        <div className="tool" onClick={handleResumeBuilderClick} role="button" tabIndex="0">
          <FaBriefcase className="tool-icon" />
          <h2>Resume Builder</h2>
          <p>Create professional resumes tailored to specific job descriptions.</p>
        </div>
        <div className="tool" onClick={handleTextToMCQClick} role="button" tabIndex="0">
          <FaQuestion className="tool-icon" />
          <h2>Text to MCQ</h2>
          <p>Generate multiple-choice questions from text and evaluate your knowledge.</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
