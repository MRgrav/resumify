import React, { useState } from 'react';

function JobExperience({ onNext }) {
  const [experiences, setExperiences] = useState([
    { company: '', position: '', startDate: '', endDate: '', description: '' }
  ]);

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const handleAddMore = () => {
    setExperiences([...experiences, { company: '', position: '', startDate: '', endDate: '', description: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ experiences });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Job Experience</h2>
      <form onSubmit={handleSubmit}>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <div className="mb-2">
              <label className="block mb-1">Company</label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Position</label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) => handleChange(index, 'position', e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Start Date</label>
              <input
                type="date"
                value={experience.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">End Date</label>
              <input
                type="date"
                value={experience.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Description</label>
              <textarea
                value={experience.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                className="w-full p-2 border rounded"
                rows="3"
                required
              ></textarea>
            </div>
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

export default JobExperience;

