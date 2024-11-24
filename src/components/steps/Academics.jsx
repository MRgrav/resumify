import React, { useState } from 'react';

function Academics({ onNext }) {
  const [academics, setAcademics] = useState([
    { degree: '', institution: '', year: '' }
  ]);

  const handleChange = (index, field, value) => {
    const updatedAcademics = [...academics];
    updatedAcademics[index][field] = value;
    setAcademics(updatedAcademics);
  };

  const handleAddMore = () => {
    setAcademics([...academics, { degree: '', institution: '', year: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ academics });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Academic Information</h2>
      <form onSubmit={handleSubmit}>
        {academics.map((academic, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <div className="mb-2">
              <label className="block mb-1">Degree</label>
              <input
                type="text"
                value={academic.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Institution</label>
              <input
                type="text"
                value={academic.institution}
                onChange={(e) => handleChange(index, 'institution', e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Year</label>
              <input
                type="number"
                value={academic.year}
                onChange={(e) => handleChange(index, 'year', e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
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

export default Academics;

