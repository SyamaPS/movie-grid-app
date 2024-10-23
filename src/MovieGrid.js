import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieGrid.css'; 
const MovieGrid = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

 
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await axios.get(`https://test.create.diagnal.com/data/page${page}.json`);
        setMovies(prevMovies => [...prevMovies, ...response.data.page['content-items'].content]);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadMovies();
  }, [page]);

    const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="movie-grid">
      {filteredMovies.map((movie, index) => (
        <div key={index} className="movie-item">
          <img src={`https://test.create.diagnal.com/images/${movie['poster-image']}`} alt={movie.name} />
          <p>{movie.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
