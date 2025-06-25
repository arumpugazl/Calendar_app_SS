// WeekdayLabels.jsx
import React from 'react';
import './Weekdaylables.css';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeekdayLabels = () => {
  return (
    <div className="weekday-labels">
      {days.map((day, idx) => (
        <div
          key={idx}
          className={`weekday-label ${
            day === 'Saturday' || day === 'Sunday' ? 'weekend-label' : 'weekday'
          }`}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekdayLabels;
