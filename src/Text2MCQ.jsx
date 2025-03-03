import React, { useState } from "react";
import axios from "axios";
import "./Text2MCQ.css"; // Import CSS file

const Text2MCQ = () => {
  const [text, setText] = useState("");
  const [mcqs, setMcqs] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  // Set the API base URL (use deployed URL but keep local as a comment)
  const API_BASE_URL = "https://youcontent-backend.onrender.com"; 
  // const API_BASE_URL = "http://127.0.0.1:8000"; // Use for local testing

  // Generate MCQs from text
  const handleGenerateMCQ = async () => {
    setLoading(true);
    setScore(null); // Reset score
    setCorrectAnswers([]); // Reset correct answers
    try {
      const response = await axios.post(`${API_BASE_URL}/generate-mcq/`, { text });
      setMcqs(response.data.mcqs);
      setAnswers(new Array(response.data.mcqs.length).fill(null)); // Reset answers
    } catch (error) {
      console.error("Error generating MCQs:", error);
      alert("Failed to generate MCQs. Please try again.");
    }
    setLoading(false);
  };

  // Submit answers and get the score
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/check-answers/`, {
        questions: mcqs,
        answers: answers,
      });

      setScore(response.data.score); // Extract only the score
      setCorrectAnswers(response.data.correct_answers); // Extract correct answers
    } catch (error) {
      console.error("Error submitting answers:", error);
      alert("Failed to submit answers. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Text to MCQ Generator</h1>

      <textarea
        className="text-input"
        rows="4"
        cols="50"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="generate-btn" onClick={handleGenerateMCQ} disabled={loading}>
        {loading ? "Generating..." : "Generate MCQs"}
      </button>

      {mcqs.length > 0 && (
        <div className="mcq-section">
          <h2>Multiple Choice Questions</h2>
          {mcqs.map((q, idx) => {
            const userAnswer = answers[idx]?.trim().toLowerCase();
            const correctAnswer = correctAnswers[idx]?.trim().toLowerCase();

            return (
              <div
                className={`mcq-box ${
                  correctAnswers.length > 0
                    ? userAnswer === correctAnswer
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                key={idx}
              >
                <p className="question">{q.question}</p>
                {q.options.map((option, i) => (
                  <label key={i} className="option-label">
                    <input
                      type="radio"
                      name={`q-${idx}`}
                      value={option}
                      checked={answers[idx] === option}
                      onChange={() => {
                        const newAnswers = [...answers];
                        newAnswers[idx] = option;
                        setAnswers(newAnswers);
                      }}
                      disabled={correctAnswers.length > 0} // Disable after submission
                    />
                    {option}
                  </label>
                ))}

                {/* ✅ Show correct answer after submission */}
                {correctAnswers.length > 0 && (
                  <p className="correct-answer">
                    ✅ Correct Answer: <strong>{q.correct_answer}</strong>
                  </p>
                )}
              </div>
            );
          })}
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={answers.includes(null) || correctAnswers.length > 0}
          >
            Submit Answers
          </button>
        </div>
      )}

      {score !== null && (
        <>
          <h2 className="score">
            Your Score: {score} / {mcqs.length}
          </h2>
          <h3>Correct Answers:</h3>
          <ul>
            {mcqs.map((q, idx) => (
              <li key={idx}>
                <strong>{q.question}:</strong> {q.correct_answer}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Text2MCQ;
