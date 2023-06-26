import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/MoviePage/MoviePage';
import ActorPage from './pages/ActorPage/ActorPage';
import SearchPage from './pages/SearchPage/SearchPage';

const App = () => {
  // let a = 5;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/actor/:id" element={<ActorPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
