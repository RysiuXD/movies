import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { useFetch } from '../../hooks/useFetch';
import { Link, useNavigate } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';

const HomePage = () => {
  const playingMovies = useFetch('movie/now_playing');
  const popularMovies = useFetch('movie/popular');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const bannerMovie = playingMovies.data[0];

  if (!bannerMovie) return;

  const bannerImage = `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`;

  const navigateToSearch = () => {
    if (query.length < 3) return;
    navigate(`/search/${query}`);
  };

  console.log(query);

  return (
    <div>
      <div className={styles.browser}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a movie title"
        />
        <button onClick={navigateToSearch}>Search</button>
      </div>

      <div
        style={{ backgroundImage: `url(${bannerImage})` }}
        className={styles.banner}
      >
        <h1 className={styles.title}>{bannerMovie.title}</h1>
        <Link className={styles.link} to="/">
          Oglądaj
        </Link>
      </div>

      <section className={styles.container}>
        <h2>Najpopularniejsze</h2>
        <div className={styles.wrapper}>
          {popularMovies.data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className={styles.container}>
        <h2>Nowości</h2>
        <div className={styles.wrapper}>
          {playingMovies.data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
