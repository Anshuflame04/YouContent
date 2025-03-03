import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'; // Import react-markdown for formatting
import './AIChat.css';

const AIChat = () => {
  const [messages, setMessages] = useState([]); // Store chat history
  const [userMessage, setUserMessage] = useState(''); // Store user's current input
  const [loading, setLoading] = useState(false); // Loading state for API call

  // Handle user input change
  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!userMessage.trim()) {
      alert('Please enter a message.');
      return;
    }

    // Add user message to the chat history
    const newMessages = [...messages, { sender: 'user', text: userMessage }];
    setMessages(newMessages);
    setUserMessage(''); // Clear the input

    setLoading(true);
    try {
      // Replace with your actual API endpoint
      // const response = await axios.post('http://localhost:8000/api/chat/', { message: userMessage });
      const response = await axios.post('https://youcontent-backend.onrender.com/api/chat/', { message: userMessage });


      // Add AI's response to the chat history
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', text: response.data.reply },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to get a response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-chat">
      <h1>AI Chatbot</h1>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === 'user' ? 'user' : 'ai'}`}
          >
            <span>{message.sender === 'user' ? 'You' : 'AI'}:</span>
            <div className="message-text">
              {message.sender === 'ai' ? (
                <ReactMarkdown>{message.text}</ReactMarkdown> // Render markdown for AI's response
              ) : (
                message.text
              )}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={userMessage}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default AIChat;
