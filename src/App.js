import React, { useState } from 'react';
import HeaderWithSearch from './HeaderWithSearch'; 
import MovieGrid from './MovieGrid'; 

function App() {
  const [searchQuery, setSearchQuery] = useState(''); 

  return (
    <div className="App">
      
      <HeaderWithSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Pass the search query to the MovieGrid */}
      <MovieGrid searchQuery={searchQuery} />
    </div>
  );
}

export default App;
