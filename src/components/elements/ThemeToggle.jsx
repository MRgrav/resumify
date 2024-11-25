import React, { useState } from 'react';
import './ThemeToggle.css';

function ThemeToggle({setTheme, theme}) {
  const [isChecked, setIsChecked] = useState(() => {
    return theme === 'dark' ? 'true' : 'false';
  });

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setTheme(() => {
        return isChecked ? 'dark' : 'light';
    })
    // false means dark
  };

  return (
    <div className="checkbox-wrapper-5">
      <div className="check">
        <input
          id="check-5"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label htmlFor="check-5"></label>
      </div>
    </div>
  );
}

export default ThemeToggle;
