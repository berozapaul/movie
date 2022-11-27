import React, { useEffect, useState, useCallback } from 'react';
import { Container } from '@mui/material';

import AppContext from './context';
import Header from "./components/header/header";
import URLRoute from "./route";
import { findData } from './utils/api';
import './App.css';

function App() {
  const [movieData, setMovieData] = useState([]);

  const handleSearchData = useCallback((searchData) => {
    setMovieData(searchData.data);
  }, []);

  useEffect(() => {
    (async () => {
      const movieData = await findData();
      setMovieData(movieData.data);
    })();
  }, []);

  const contextData = { movies: movieData };
  return (
    <Container maxWidth="md">
        <AppContext.Provider value={contextData}>
          <Header onSearch={handleSearchData} />
          <URLRoute />
        </AppContext.Provider>
    </Container>
  );
}

export default App;
