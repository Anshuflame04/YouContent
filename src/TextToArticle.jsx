import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './TextToArticle.css';

const TextToArticle = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [platform, setPlatform] = useState('blog');

  const prePrompt = `
    Write a well-structured, engaging, and informative article for the following platform: {platform}.
    Be sure to tailor the tone, style, and content to fit the platform's audience. Topic:
  `;

  const handleGenerateArticle = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);

    try {
      // const response = await fetch('http://127.0.0.1:8000/generate-article/',
      const response = await fetch('https://youcontent-backend.onrender.com/generate-article/', { // FastAPI server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform,
          prompt,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedText(data.generatedText); // Adjust based on the FastAPI server response
      } else {
        setGeneratedText('Error generating article. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setGeneratedText('Failed to generate article. Please check your network and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-to-article">
      <h1 className="title">Text to Article</h1>

      <div className="platform-selector">
        <label htmlFor="platform">Select Platform:</label>
        <select
          id="platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="blog">Blog Post</option>
          <option value="twitter">Twitter/X Thread</option>
          <option value="linkedin">LinkedIn Article</option>
          <option value="facebook">Facebook Post</option>
          <option value="instagram">Instagram Caption</option>
        </select>
      </div>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your topic or idea for an article..."
        rows="5"
        className="textarea"
      />

      <button
        onClick={handleGenerateArticle}
        disabled={isLoading || !prompt.trim()}
        className={`generate-button ${isLoading ? 'loading' : ''}`}
      >
        {isLoading ? 'Generating...' : 'Generate'}
      </button>

      {generatedText && (
        <div className="generated-output">
          <h2>Generated Article:</h2>
          <ReactMarkdown>{generatedText}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default TextToArticle;
