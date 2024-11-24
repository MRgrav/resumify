import React, { useState } from 'react';

const ResumeForm = ({ onGenerateResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobRole: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateResume(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="jobRole"
        placeholder="Job Role (e.g., Software Engineer)"
        value={formData.jobRole}
        onChange={handleChange}
      />
      <textarea
        name="experience"
        placeholder="Experience"
        value={formData.experience}
        onChange={handleChange}
      />
      <textarea
        name="skills"
        placeholder="Skills"
        value={formData.skills}
        onChange={handleChange}
      />
      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default ResumeForm;
