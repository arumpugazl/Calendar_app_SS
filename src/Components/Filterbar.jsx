// FilterBar.jsx
import React from 'react';
import './FilterBar.css';

const FilterBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Events"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default FilterBar;
