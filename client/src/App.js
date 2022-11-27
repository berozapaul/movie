import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';

import AppContext from './context';
import Loader from "./components/common/loader";


import Header from "./components/header/header";
import URLRoute from "./route";
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
          <URLRoute />
        </AppContext.Provider>
        : <Loader />
      }
    </Container>
  );
}

export default App;
