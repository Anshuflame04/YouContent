import React, { useState } from "react";
import "./Text2Img.css"; // Ensure this CSS file is updated

const Text2Img = () => {
  const [inputText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Securely fetch API key from environment variables
  const HF_API_KEY = process.env.REACT_APP_HF_TOKEN;

  const query = async (data) => {
    setLoading(true);
    setImageUrl(null);
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
        {
          headers: {
            Authorization: `Bearer ${HF_API_KEY}`, // Use secure API key
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const resultBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(resultBlob);
      setImageUrl(imageObjectURL);
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image. Please try again.");
    }
    setLoading(false);
  };

  const handleGenerate = () => {
    if (inputText.trim() === "") {
      alert("Please enter a description.");
      return;
    }
    query({ inputs: inputText });
  };

  const exampleText = [
    "A futuristic city skyline at sunset",
    "A serene beach with turquoise water",
    "A fantasy forest with glowing plants",
    "A bustling marketplace in a medieval town",
  ];

  const handleExampleClick = (text) => {
    setInputText(text);
  };

  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "generated-image.png";
      link.click();
    }
  };

  return (
    <div className="text2img-container">
      <h2>Text-to-Image Generator</h2>
      <div className="input-section">
        <textarea
          placeholder="Enter your description..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="input-text"
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="generate-btn"
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>

      <div className="example-texts">
        <h3>Try these examples:</h3>
        <div className="examples-grid">
          {exampleText.map((text, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(text)}
              className="example-btn"
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      <div className="output-section">
        {loading && (
          <div className="loading-container">
            <div className="spinner-container">
              <div className="spinner"></div>
              <p>Generating your image...</p>
            </div>
          </div>
        )}

        {imageUrl && (
          <div className="image-preview">
            <img
              src={imageUrl}
              alt="Generated content"
              className="fade-in-image"
            />
            <div className="download-btn">
              <button onClick={handleDownload}>Download Image</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Text2Img;
