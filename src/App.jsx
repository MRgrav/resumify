import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import ResumeBuilder from './components/ResumeBuilder';

function App() {
  return (
    <Router>
      <div className="bg-black bg-opacity-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/build" element={<ResumeBuilder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

