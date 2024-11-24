import React, { useState } from 'react';

function Skills({ onNext }) {
  const [skills, setSkills] = useState(['']);

  const handleChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleAddMore = () => {
    setSkills([...skills, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ skills: skills.filter(skill => skill.trim() !== '') });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <form onSubmit={handleSubmit}>
        {skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter a skill"
            />
          </div>
        ))}
        <button type="button" onClick={handleAddMore} className="btn btn-secondary mb-4">
          Add More
        </button>
        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    </div>
  );
}

export default Skills;

