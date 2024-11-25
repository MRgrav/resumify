import React, { useState } from 'react';
import { FaCode, FaPalette, FaBullhorn, FaChartLine, FaUserTie, FaWrench, FaGraduationCap, FaHospitalUser, FaBalanceScale, FaCamera } from 'react-icons/fa';

const jobTypes = [
  { value: 'developer', label: 'Software Developer', icon: FaCode, color: '#61DAFB' },
  { value: 'designer', label: 'Graphic Designer', icon: FaPalette, color: '#FF7F50' },
  { value: 'marketing', label: 'Marketing Specialist', icon: FaBullhorn, color: '#FFD700' },
  { value: 'analyst', label: 'Data Analyst', icon: FaChartLine, color: '#32CD32' },
  { value: 'manager', label: 'Project Manager', icon: FaUserTie, color: '#9370DB' },
  { value: 'engineer', label: 'Mechanical Engineer', icon: FaWrench, color: '#4682B4' },
  { value: 'teacher', label: 'Teacher', icon: FaGraduationCap, color: '#FF69B4' },
  { value: 'nurse', label: 'Nurse', icon: FaHospitalUser, color: '#20B2AA' },
  { value: 'lawyer', label: 'Lawyer', icon: FaBalanceScale, color: '#8B4513' },
  { value: 'photographer', label: 'Photographer', icon: FaCamera, color: '#FF4500' },
];

const JobSelector = ({theme}) => {
  const [selectedJob, setSelectedJob] = useState('');
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const selectorBG = theme === 'dark' ? 'bg-zinc-900' : 'bg-white' ;
  const selectedBG = theme === 'dark' ? 'bg-zinc-950' : 'bg-violet-100' ;
  const textColor2 = theme === 'dark' ? 'text-zinc-500' : 'text-zinc-700' ;

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
      <div className="max-w-md min-w-md mx-auto">
        <h1 className={`text-3xl font-extrabold text-center mb-8 ${textColor}`}>
          Choose Your Job Type
        </h1>
        <div className={`${selectorBG} shadow-md rounded-lg overflow-hidden`}>
          <div className="max-h-[52vh] overflow-y-auto"> {/* Added max-height and overflow for scroll */}
            {jobTypes.map((job) => (
              <label
                key={job.value}
                className={`flex items-center p-4 cursor-pointer transition-colors duration-200 ease-in-out ${
                  selectedJob === job.value ? `${selectedBG} text-bold text-lg` : `hover:${selectedBG} hover:text-lg`
                }`}
              >
                <input
                  type="radio"
                  name="jobType"
                  value={job.value}
                  checked={selectedJob === job.value}
                  onChange={(e) => setSelectedJob(e.target.value)}
                  className="sr-only"
                />
                <div className={`transition-transform duration-200 ${selectedJob === job.value ? 'scale-105' : 'scale-75'}`}>
                  <job.icon className="h-8 w-8 mr-3" style={{ color: job.color }} />
                </div>
                <span className={`${textColor2} transition-all duration-200 ${
                  selectedJob === job.value ? 'font-semibold ps-2' : 'font-normal hover:font-semibold'
                }`}>
                  {job.label}
                </span>
                <span className="ml-auto">
                  <svg
                    className={`h-5 w-5 ${
                      selectedJob === job.value ? 'text-indigo-600 scale-105' : 'text-gray-400 hover:h-3'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </label>
            ))}
          </div>
        </div>
        {selectedJob && (
          <p className={`mt-4 text-center ${textColor2}`}>
            You selected: <span className="font-semibold">{jobTypes.find(job => job.value === selectedJob).label}</span>
          </p>
        )}
      </div>
      <div className='bg-gray-700 w-48 flex justify-center align-center'>
          <p>Ad</p>
      </div>
    </div>
  );
};

export default JobSelector;
