import React from 'react';
import './SearchBar.css'; // We will define this CSS below

const SearchIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#6B7280" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <span className="search-icon-wrapper">
        <SearchIcon />
      </span>
      <input
        className="search-input-field"
        placeholder="Name, Phone no."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar