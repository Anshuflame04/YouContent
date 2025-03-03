import React, { useState } from "react";
import PreviewSection from "./PreviewSection";
import DownloadSection from "./DownloadSection";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
  });

  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [coreSkills, setCoreSkills] = useState("");
  const [languages, setLanguages] = useState("");
  const [interests, setInterests] = useState("");

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "personal") {
      setPersonalInfo({ ...personalInfo, [name]: value });
    } else if (section === "summary") {
      setSummary(value);
    } else if (section === "technicalSkills") {
      setTechnicalSkills(value);
    } else if (section === "coreSkills") {
      setCoreSkills(value);
    } else if (section === "languages") {
      setLanguages(value);
    } else if (section === "interests") {
      setInterests(value);
    }
  };

  const handleAddEducation = () => {
    setEducation([...education, { degree: "", institution: "", year: "", cgpa: "" }]);
  };

  const handleAddProject = () => {
    setProjects([...projects, { name: "", duration: "", description: "", tech: "" }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { role: "", company: "", duration: "", responsibilities: "" }]);
  };

  const handleChangeEducation = (index, e) => {
    const updatedEducation = [...education];
    updatedEducation[index][e.target.name] = e.target.value;
    setEducation(updatedEducation);
  };

  const handleChangeProject = (index, e) => {
    const updatedProjects = [...projects];
    updatedProjects[index][e.target.name] = e.target.value;
    setProjects(updatedProjects);
  };

  const handleChangeExperience = (index, e) => {
    const updatedExperience = [...experience];
    updatedExperience[index][e.target.name] = e.target.value;
    setExperience(updatedExperience);
  };

  const handleRemoveEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleRemoveProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleRemoveExperience = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  return (
    <div className="resume-builder">
      <h1>Resume Builder</h1>

      {/* Personal Information */}
      <div className="form-section">
        <h2>Personal Information</h2>
        <input type="text" name="name" placeholder="Full Name" value={personalInfo.name} onChange={(e) => handleInputChange(e, "personal")} />
        <input type="email" name="email" placeholder="Email" value={personalInfo.email} onChange={(e) => handleInputChange(e, "personal")} />
        <input type="text" name="phone" placeholder="Phone Number" value={personalInfo.phone} onChange={(e) => handleInputChange(e, "personal")} />
        <input type="text" name="github" placeholder="GitHub URL" value={personalInfo.github} onChange={(e) => handleInputChange(e, "personal")} />
        <input type="text" name="linkedin" placeholder="LinkedIn URL" value={personalInfo.linkedin} onChange={(e) => handleInputChange(e, "personal")} />
      </div>

      {/* Profile Summary */}
      <div className="form-section">
        <h2>Profile Summary</h2>
        <textarea placeholder="Write a brief summary" value={summary} onChange={(e) => handleInputChange(e, "summary")} />
      </div>

      {/* Education */}
      <div className="form-section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleChangeEducation(index, e)} />
            <input type="text" name="institution" placeholder="Institution" value={edu.institution} onChange={(e) => handleChangeEducation(index, e)} />
            <input type="text" name="year" placeholder="Year" value={edu.year} onChange={(e) => handleChangeEducation(index, e)} />
            <input type="text" name="cgpa" placeholder="CGPA/Percentage" value={edu.cgpa} onChange={(e) => handleChangeEducation(index, e)} />
            <button onClick={() => handleRemoveEducation(index)}>Remove</button>
          </div>
        ))}
        <button onClick={handleAddEducation}>Add Education</button>
      </div>

      {/* Projects */}
      <div className="form-section">
        <h2>Projects</h2>
        {projects.map((proj, index) => (
          <div key={index}>
            <input type="text" name="name" placeholder="Project Name" value={proj.name} onChange={(e) => handleChangeProject(index, e)} />
            <input type="text" name="duration" placeholder="Duration" value={proj.duration} onChange={(e) => handleChangeProject(index, e)} />
            <textarea name="description" placeholder="Description" value={proj.description} onChange={(e) => handleChangeProject(index, e)} />
            <input type="text" name="tech" placeholder="Technologies Used" value={proj.tech} onChange={(e) => handleChangeProject(index, e)} />
            <button onClick={() => handleRemoveProject(index)}>Remove</button>
          </div>
        ))}
        <button onClick={handleAddProject}>Add Project</button>
      </div>

      {/* Skills */}
      <div className="form-section">
        <h2>Technical Skills</h2>
        <textarea placeholder="List your technical skills" value={technicalSkills} onChange={(e) => handleInputChange(e, "technicalSkills")} />
      </div>

      <div className="form-section">
        <h2>Core Skills</h2>
        <textarea placeholder="List your core skills" value={coreSkills} onChange={(e) => handleInputChange(e, "coreSkills")} />
      </div>

      {/* Languages & Interests */}
      <div className="form-section">
        <h2>Languages</h2>
        <input type="text" placeholder="Languages you speak" value={languages} onChange={(e) => handleInputChange(e, "languages")} />
        <h2>Interests</h2>
        <input type="text" placeholder="Your interests" value={interests} onChange={(e) => handleInputChange(e, "interests")} />
      </div>

      <PreviewSection {...{ personalInfo, summary, education, projects, experience, technicalSkills, coreSkills, languages, interests }} />
      <DownloadSection {...{ personalInfo, summary, education, projects, experience, technicalSkills, coreSkills, languages, interests }} />
    </div>
  );
};

export default ResumeBuilder;
