// src/Components/Header.jsx
import React from "react";
import "./Header.css";

const Header = ({ darkMode, setDarkMode, currentDate, changeMonth }) => {
  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className="header-container">
      <div className="title-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="calendar-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 4h10M5 10h14M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10M5 10V8a2 2 0 012-2h10a2 2 0 012 2v2"
          />
        </svg>
        <h1 className="main-title">Calendar</h1>
      </div>

      <div className="controls">
        <div className="month-navigation">
          <button className="nav-button" onClick={() => changeMonth(-1)}>⟵</button>
          <span>{currentDate.format("MMMM YYYY")}</span>
          <button className="nav-button" onClick={() => changeMonth(1)}>⟶</button>
        </div>
      </div>

      <div className="dark-toggle" onClick={toggleMode}>
        <span className="toggle-label">{darkMode ? "Light Mode" : "Dark Mode"}</span>
        <span className="toggle-icon">{darkMode ? "🌞" : "🌙"}</span>
      </div>
    </div>
  );
};

export default Header;
