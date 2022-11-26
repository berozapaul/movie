import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';

import AppContext from './context';
import Search from "./components/search/search";
import Loader from "./components/common/loader";

import List from './components/list/list';
import Header from "./components/header/header";
import Route from "./route";
import { findData } from './utils/api';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const executeSearch = (data) => {
    setData(data);
  };

  useEffect(() => {
    (async() => {
      const movieData = await findData();
      setData(movieData.data);
    })();
  }, []);

  const contextData = { movies: data || [] };
  return (
    <Container maxWidth="md">
      {data.length > 0 ?
        <AppContext.Provider value={contextData}>
          <Header />
          <h1 className="inscApp">IMDB Top Movies</h1>
          <Search
            onSearch={executeSearch}
          />
          <List />
        </AppContext.Provider>
        : <Loader />
      }
    </Container>
  );
}

export default App;
