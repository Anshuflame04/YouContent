import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary router components

import MainTab from './MainTab';
import Home from './Home';
import Tools from './Tools';
import About from './About'; 
import Text2Img from './Text2Img';
import TextToArticle from './TextToArticle'; // Import the component
import YouTubeSummarizer from './YouTubeSummarizer'; // Correct import
import TextToCode from './TextToCode'; // Import new TextToCode component
import ImageEnhancer from './ImageEnhancer';
import AIChat from './AIChat';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeBuilder from './ResumeBuilder';
import Text2MCQ from './Text2MCQ';

const App = () => {
  return (
    <Router> {/* Wrap everything inside the Router */}
      <MainTab />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route to Home component */}
        <Route path="/home" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/img" element={<Text2Img />} /> {/* Shortened path */}
        <Route path="/youtube" element={<YouTubeSummarizer />} /> {/* Shortened path */}
        <Route path="/article" element={<TextToArticle />} /> {/* Shortened path */}
        <Route path="/code" element={<TextToCode />} /> {/* Added route for TextToCode */}
        <Route path="/about" element={<About />} />
        <Route path="/image-enhancer" element={<ImageEnhancer />} />
        <Route path="/chatbot" element={<AIChat />} /> {/* Added route for AIChat */}
        <Route path="/resume-builder" element={<ResumeBuilder />} /> {/* Added route for ResumeBuilder */}
        <Route path="/text2mcq" element={<Text2MCQ />} /> {/* Added route for Text2MCQ */}
      </Routes>
    </Router>
  );
};

export default App;
