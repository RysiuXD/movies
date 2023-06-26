import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import ActorCard from '../../components/ActorCard/ActorCard';
import styles from './MoviePage.module.css';

const MoviePage = () => {
  const params = useParams();
  const movie = useFetch(`/movie/${params.id}`);

  const { data: people } = useFetch(`/movie/${params.id}/credits`);
  const cast = people.cast;
  console.log(cast);

  return (
    <div>
      <h1>{movie.data.original_title}</h1>
      <div className={styles.wrapper}>
        {cast?.map((actor) => (
          <ActorCard actor={actor} key={actor.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
