import React, { useState } from 'react';
import Text2Img from './Text2Img';
import './Page2.css'; // Import CSS for styling

const Page2 = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="page2-container">
      {activeButton === 'text2img' ? (
        <div className="text2img-container">
          <h2>Text to Image Generator</h2>
          <Text2Img />
          <button className="back-button" onClick={() => setActiveButton(null)}>
            Back
          </button>
        </div>
      ) : (
        <div className="button-grid">
          <div onClick={() => handleButtonClick('button1')} className="grid-item">
            <h3 className="button-title">Image to Text</h3>
            <p className="button-description">Convert images to text</p>
          </div>
          <div onClick={() => handleButtonClick('text2img')} className="grid-item">
            <h3 className="button-title">Text to Image</h3>
            <p className="button-description">Generate images from text</p>
          </div>
          <div onClick={() => handleButtonClick('button3')} className="grid-item">
            <h3 className="button-title">Web Search</h3>
            <p className="button-description">Search the web for information</p>
          </div>
          <div onClick={() => handleButtonClick('button4')} className="grid-item">
            <h3 className="button-title">Text To Article</h3>
            <p className="button-description">Generate articles from text</p>
          </div>
          <div onClick={() => handleButtonClick('button5')} className="grid-item">
            <h3 className="button-title">Study Chat</h3>
            <p className="button-description">Chat to assist in studies</p>
          </div>
          <div onClick={() => handleButtonClick('button6')} className="grid-item">
            <h3 className="button-title">Text to Quiz</h3>
            <p className="button-description">Generate quizzes from text</p>
          </div>
          <div onClick={() => handleButtonClick('button7')} className="grid-item">
            <h3 className="button-title">Code Generation</h3>
            <p className="button-description">Generate code based on inputs</p>
          </div>
          <div onClick={() => handleButtonClick('button8')} className="grid-item">
            <h3 className="button-title">qwert</h3>
            <p className="button-description">Random button functionality</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page2;
