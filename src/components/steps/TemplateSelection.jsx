import React, { useState } from 'react';

function TemplateSelection({ onNext, resumeData }) {
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const templates = [
    { id: 'template1', name: 'Professional', free: true },
    { id: 'template2', name: 'Creative', free: true },
    { id: 'template3', name: 'Executive', free: false },
    { id: 'template4', name: 'Modern', free: false },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ ...resumeData, template: selectedTemplate });
    // Here you would typically generate the resume and handle any payment for paid templates
    console.log('Final Resume Data:', { ...resumeData, template: selectedTemplate });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Select Resume Template</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="border p-4 rounded">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="template"
                  value={template.id}
                  checked={selectedTemplate === template.id}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="mr-2"
                />
                {template.name}
                {!template.free && <span className="ml-2 text-sm text-gray-500">(Paid)</span>}
              </label>
              {/* You would typically include a preview image of the template here */}
              <div className="mt-2 h-32 bg-gray-200 flex items-center justify-center">
                Template Preview
              </div>
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary mt-4">Generate Resume</button>
      </form>
    </div>
  );
}

export default TemplateSelection;

