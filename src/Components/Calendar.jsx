import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Header from './Header.jsx';
import FilterBar from './Filterbar.jsx';
import WeekdayLabels from './Weekdaylables.jsx';
import CalendarGrid from './Calendargrid.jsx';
import EventModal from './Eventmodal.jsx';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    description: '',
    color: '#d26c6c',
  });
  const [darkMode, setDarkMode] = useState(false);
  const [holidays, setHolidays] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load events from localStorage or fallback to events.json
  useEffect(() => {
    const stored = localStorage.getItem('calendarEvents');
    if (stored) {
      setEvents(JSON.parse(stored));
    } else {
      fetch('/events.json')
        .then(res => res.json())
        .then(data => {
          setEvents(data);
          localStorage.setItem('calendarEvents', JSON.stringify(data));
        });
    }
  }, []);

  // Load holidays.json
  useEffect(() => {
    fetch('/holidays.json')
      .then(res => res.json())
      .then(data => setHolidays(data));
  }, []);

  // Save events to localStorage on change
  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const changeMonth = (direction) => {
    setCurrentDate(currentDate.add(direction, 'month'));
  };

  const handleAddEvent = () => {
    const { title, date, startTime, endTime } = newEvent;

    if (!title || !date || !startTime || !endTime) {
      alert("Please fill in all required fields.");
      return;
    }

    setEvents([...events, newEvent]);

    setNewEvent({
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      location: '',
      description: '',
      color: '#d26c6c',
    });

    setShowModal(false);
  };

  // Filter events by search term
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="calendar-wrapper">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          currentDate={currentDate}
          changeMonth={changeMonth}
        />

        <div className="top-bar">
          <h2 className="subheading">My Schedule</h2>
          <button onClick={() => setShowModal(true)} className="add-event-btn">
            + Add Event
          </button>
        </div>

        {showModal && (
          <EventModal
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            setShowModal={setShowModal}
            handleAddEvent={handleAddEvent}
          />
        )}

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <WeekdayLabels />

        <CalendarGrid
          currentDate={currentDate}
          events={filteredEvents}
          filter={filter}
          holidays={holidays}
        />
      </div>
    </div>
  );
};

export default Calendar;
