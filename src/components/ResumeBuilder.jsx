import React, { useState } from 'react';
import JobSelector from './steps/JobSelector';
import UserInfo from './steps/UserInfo';
import Academics from './steps/Academics';
import Skills from './steps/Skills';
import JobExperience from './steps/JobExperience';
import TemplateSelection from './steps/TemplateSelection';
import SideBar from './elements/SideBar';
import { Link } from 'react-router-dom';

const steps = ['Job Types', 'User Info', 'Academics', 'Skills', 'Job Experience', 'Template Selection'];

function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [resumeData, setResumeData] = useState({});
  const [theme, setTheme] = useState("light");

  const handleNext = (data) => {
    setResumeData({ ...resumeData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <JobSelector onNext={handleNext} theme={theme} />;
      case 1:
        return <UserInfo onNext={handleNext} theme={theme} />;
      case 2:
        return <Academics onNext={handleNext} />;
      case 3:
        return <Skills onNext={handleNext} />;
      case 4:
        return <JobExperience onNext={handleNext} />;
      case 5:
        return <TemplateSelection onNext={handleNext} resumeData={resumeData} />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex h-screen ${theme === "light" ? 'bg-violet-50' : 'bg-zinc-950' }`}>
        <SideBar setTheme={setTheme} theme={theme}/>
        <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-violet-700">Build Your Resume</h1>
        <div className="mb-4">
            {steps.map((step, index) => (
            <span
                key={index}
                className={`inline-block px-3 py-1 mr-2 rounded-full ${
                index === currentStep ? 'bg-primary text-white' : 'bg-gray-200'
                }`}
            >
                {step}
            </span>
            ))}
        </div>
        {renderStep()}
        <div className="mt-2 flex justify-center">
            {currentStep > 0 && (
            <button className="btn text-white bg-zinc-700 bg-opacity-80 px-6 py-1.5 rounded shadow-md mr-2" onClick={handlePrevious}>
                Previous
            </button>
            )}
            {currentStep === 0 && (
                <Link to="/" className="btn text-white bg-zinc-700 bg-opacity-80 px-6 py-1.5 rounded shadow-md mr-2" >
                    Cancel
                </Link>
            )}
            {currentStep < steps.length - 1 && (
            <button className="btn text-white bg-violet-700 bg-opacity-80 px-6 py-1.5 rounded shadow-md" onClick={() => handleNext({})}>
                Next
            </button>
            )}
        </div>
        </div>
    </div>
  );
}

export default ResumeBuilder;

