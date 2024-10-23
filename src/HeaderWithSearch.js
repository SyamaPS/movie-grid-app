import React from 'react';
import './HeaderWithSearch.css'; 

const HeaderWithSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="header">
     
      <img
        src="https://test.create.diagnal.com/images/Back.png"
        alt="Back"
        className="icon back-icon"
        onClick={() => window.history.back()} 
      />

      {/* Search Input Field */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
        className="search-input"
      />

      {/* Search Icon */}
      <img
        src="https://test.create.diagnal.com/images/search.png"
        alt="Search"
        className="icon search-icon"
      />
    </div>
  );
};

export default HeaderWithSearch;

