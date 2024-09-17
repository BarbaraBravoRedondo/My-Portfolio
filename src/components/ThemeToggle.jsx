
import '../styles/ThemeToggle.scss' 

import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log("Changing theme to:", newTheme);
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  return (
    <div 
      className={`switch ${theme === 'light' ? 'active' : ''}`}
      onClick={toggleTheme}
    >
      <div className="slider">
        <i className="fas fa-sun sun-icon"></i>
        <i className="fas fa-moon moon-icon"></i>
      </div>
    </div>
  );
};

export default ThemeToggle;
