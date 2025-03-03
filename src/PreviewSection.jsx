import React from 'react';
import './PreviewSection.css';

const PreviewSection = ({ personalInfo, education, experience, skills, projects, summary }) => {
  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <div className="personal-info">
        <h3>{personalInfo.name}</h3>
        <p>{personalInfo.email} | {personalInfo.phone} | {personalInfo.linkedin}</p>
      </div>
      <div className="summary">
        <h3>Summary</h3>
        <p>{summary}</p>
      </div>
      <div className="education">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree} - {edu.school} ({edu.year})</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
      <div className="experience">
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <p>{exp.jobTitle} at {exp.company} ({exp.years})</p>
            <p>{exp.details}</p>
          </div>
        ))}
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <p>{skills}</p>
      </div>
      <div className="projects">
        <h3>Projects</h3>
        <p>{projects}</p>
      </div>
    </div>
  );
};

export default PreviewSection;
