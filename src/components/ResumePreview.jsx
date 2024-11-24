import React from 'react';
import { jsPDF } from 'jspdf';

const ResumePreview = ({ userInfo }) => {
  const { name, email, phone, jobRole, experience, skills } = userInfo;

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(name, 10, 10);
    doc.setFontSize(16);
    doc.text(`Job Role: ${jobRole}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Phone: ${phone}`, 10, 40);
    doc.text(`Experience:`, 10, 50);
    doc.text(experience, 10, 60);
    doc.text(`Skills:`, 10, 90);
    doc.text(skills, 10, 100);

    doc.save(`${name}_resume.pdf`);
  };

  return (
    <div className="resume-preview">
      <h2>{name}</h2>
      <p>{jobRole}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>

      <h3>Experience</h3>
      <p>{experience}</p>

      <h3>Skills</h3>
      <p>{skills}</p>

      <button onClick={handleDownload}>Download Resume (PDF)</button>
    </div>
  );
};

export default ResumePreview;