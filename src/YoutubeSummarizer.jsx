import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown"; // Import the markdown renderer
import "./YoutubeSummarizer.css";

const YoutubeSummarizer = () => {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    setLoading(true);
    setError(""); // Reset error state
    setSummary(""); // Clear previous summary

    try {
      // const response = await axios.post("http://127.0.0.1:8000/summarize",{
      const response = await axios.post("https://youcontent-backend.onrender.com/summarize", {
        youtube_url: youtubeLink,
      });

      if (response.data?.summary) {
        setSummary(response.data.summary); // Assuming summary is markdown-formatted
      } else {
        setError("No summary available. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.detail || "An error occurred while summarizing."
      );
    } finally {
      setLoading(false);
    }
  };

  const getThumbnail = (url) => {
    try {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return videoId
        ? `https://img.youtube.com/vi/${videoId}/0.jpg`
        : null;
    } catch {
      return null;
    }
  };

  return (
    <div className="summarizer-container">
      <h1>YouTube Video Summarizer</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter YouTube Video URL"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          className="youtube-input"
        />
        {youtubeLink && (
          <img
            src={getThumbnail(youtubeLink)}
            alt="Video Thumbnail"
            className="video-thumbnail"
          />
        )}
        <button onClick={handleSummarize} disabled={loading} className="summarize-btn">
          {loading ? "Summarizing..." : "Get Detailed Notes"}
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {summary && (
        <div className="summary-section">
          <h2>Detailed Notes:</h2>
          {/* Render the markdown summary */}
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default YoutubeSummarizer;
