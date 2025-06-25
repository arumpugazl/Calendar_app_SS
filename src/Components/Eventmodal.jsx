// components/EventModal.jsx
import React from 'react';
import './Eventmodal.css';

const EventModal = ({ newEvent, setNewEvent, setShowModal, handleAddEvent }) => {
  return (
    <div className="modal-backdrop">
      <div className="event-modal">
        <h2>Add New Event</h2>

        <input
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />

        <input
          type="time"
          value={newEvent.startTime}
          onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
          placeholder="Start Time"
        />

        <input
          type="time"
          value={newEvent.endTime}
          onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
          placeholder="End Time"
        />

        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />

        <textarea
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />

        <label>Event Color:</label>
        <input
          type="color"
          value={newEvent.color}
          onChange={(e) => setNewEvent({ ...newEvent, color: e.target.value })}
        />

        <div className="modal-actions">
          <button onClick={() => setShowModal(false)}>Cancel</button>
          <button onClick={handleAddEvent}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
