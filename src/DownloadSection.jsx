import React from 'react';
import { jsPDF } from 'jspdf';

const DownloadSection = ({ personalInfo, education, experience, skills, projects, summary }) => {
  const downloadResume = () => {
    const doc = new jsPDF();
    
    doc.text(`${personalInfo.name}`, 20, 20);
    doc.text(`${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.linkedin}`, 20, 30);
    
    doc.text('Summary', 20, 40);
    doc.text(summary, 20, 50);
    
    doc.text('Education', 20, 60);
    education.forEach((edu, index) => {
      doc.text(`${edu.degree} - ${edu.school} (${edu.year})`, 20, 70 + (index * 10));
      doc.text(edu.details, 20, 80 + (index * 10));
    });
    
    doc.text('Experience', 20, 90);
    experience.forEach((exp, index) => {
      doc.text(`${exp.jobTitle} at ${exp.company} (${exp.years})`, 20, 100 + (index * 10));
      doc.text(exp.details, 20, 110 + (index * 10));
    });
    
    doc.text('Skills', 20, 120);
    doc.text(skills, 20, 130);
    
    doc.text('Projects', 20, 140);
    doc.text(projects, 20, 150);
    
    doc.save('resume.pdf');
  };

  return (
    <div>
      <button onClick={downloadResume}>Download Resume as PDF</button>
    </div>
  );
};

export default DownloadSection;
