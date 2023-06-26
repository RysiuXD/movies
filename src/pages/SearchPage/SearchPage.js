import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SearchPage.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';

const SearchPage = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    getData();
  }, [query]);

  console.log(results);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=42199dba31be6aeaee9e0207eecc5b2e&query=${query}`
      );
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3>Search results</h3>
      <div className={styles.wrapper}>
          {results.map((result) => <MovieCard key={result.id} movie={result} />)}
      </div>
    </div>
  );
};

export default SearchPage;
