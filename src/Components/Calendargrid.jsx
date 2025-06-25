// Calendargrid.jsx
import React from 'react';
import dayjs from 'dayjs';
import './Calendargrid.css';

const CalendarGrid = ({ currentDate, events, holidays }) => {
  const startOfMonth = currentDate.startOf('month');
  const startDay = startOfMonth.day();
  const daysInMonth = currentDate.daysInMonth();
  const today = dayjs();

  const cells = [];

  for (let i = 0; i < startDay; i++) {
    cells.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
  }

  for (let date = 1; date <= daysInMonth; date++) {
    const thisDate = dayjs(new Date(currentDate.year(), currentDate.month(), date));
    const isToday = thisDate.isSame(today, 'day');
    const dayIndex = thisDate.day();
    const isWeekend = dayIndex === 0 || dayIndex === 6;

    // ✅ Check if it's a holiday and get the object
    const holiday = holidays.find(h => dayjs(h.date).isSame(thisDate, 'day'));

    const eventsForDate = events.filter(event =>
      dayjs(event.date).isSame(thisDate, 'day')
    );

    const cellClasses = [
      'calendar-cell',
      isToday ? 'today' : '',
      isWeekend ? 'weekend' : '',
      holiday ? 'holiday-cell' : ''
    ].join(' ');

    cells.push(
      <div key={date} className={cellClasses}>
        <div className="date-number">{date}</div>

        {/* ✅ Show holiday name and icon if available */}
        {holiday && (
          <div className="holiday-content">
            <span className="holiday-icon">{holiday.icon || '🎉'}</span>
            <span className="holiday-name">{holiday.name}</span>
          </div>
        )}

        <div className="event-container">
          {eventsForDate.map((event, idx) => (
            <div key={idx} className="event">{event.title}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="calendar-grid">
      {cells}
    </div>
  );
};

export default CalendarGrid;
