import React, { useState } from 'react';
import './TextToCode.css';  // Uncomment if you have the CSS file

const TextToCode = () => {
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('python'); // Default to Python
  const [generatedCode, setGeneratedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateCode = async () => {
    if (!description.trim()) return;

    setIsLoading(true);

    try {
      // const response = await fetch('http://127.0.0.1:8000/generate-code/',
      const response = await fetch('https://youcontent-backend.onrender.com/generate-code/', { // FastAPI server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          language,
        }),
      });

      const data = await response.json();

      if (response.ok && data.generatedCode) {
        setGeneratedCode(data.generatedCode); // Adjust based on the FastAPI server response
      } else {
        setGeneratedCode('Error generating code. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setGeneratedCode('Failed to generate code. Please check your network and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyCode = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode)
        .then(() => {
          alert('Code copied to clipboard!');
        })
        .catch((error) => {
          console.error('Failed to copy the code:', error);
        });
    }
  };

  return (
    <div className="text-to-code">
      <h1 className="title">Text to Code</h1>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter the problem description..."
        rows="5"
        className="textarea"
      />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="language-select"
      >
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="java">Java</option>
        <option value="c">C</option>
        <option value="c++">C++</option>
        {/* Add more languages as needed */}
      </select>

      <button
        onClick={handleGenerateCode}
        disabled={isLoading || !description.trim()}
        className={`generate-button ${isLoading ? 'loading' : ''}`}
      >
        {isLoading ? 'Generating...' : 'Generate Code'}
      </button>

      {generatedCode && (
        <div className="generated-output">
          <h2>Generated Code:</h2>
          <pre className="code-block">{generatedCode}</pre>
          <button onClick={handleCopyCode} className="copy-button">
            Copy Code
          </button>
        </div>
      )}
    </div>
  );
};

export default TextToCode;
