import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=a738536a30adb33883bdab9503ea3cb4`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Movies Today</h1>
      <div className={styles.moviesContainer}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.movieCard}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2 className={styles.movieTitle}>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
