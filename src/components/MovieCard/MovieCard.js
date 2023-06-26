import React from 'react';
import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  // console.log(movie.id);
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <Link className={styles.card} to={`/movie/${movie.id}`}>
      <div>
        <img src={image} alt={movie.title} />
        <h3>{movie.title}</h3>
        <span className={styles.vote}>{movie.vote_average}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
