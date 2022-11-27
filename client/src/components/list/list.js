import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './list.css';

import AppContext from '../../context';
const baseUrl = process.env.REACT_APP_POSTER_URL;

function List() {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const { movies = [] } = context;

  const handleOnCellClick = (params) => {
    navigate(`/${params.row._id}`, { state: params.row });
  };

  const data = {
    "columns": [
      {
        "field": "images",
        "headerName": "Poster",
        "width": 200,
        renderCell: (params) => (
        <a href="/#" className='poster'>
          <img alt={`${params.row.name}`} src={`${baseUrl}${params.row.imdbId}.jpg`} width="170" />
        </a>
        ),
      },
      {
        "field": "name",
        flex: 1,
        "headerName": "Movie title",
        renderCell: (params) => (<div>
          <h2>{params.row.name}</h2>
          <p>{params.row.description}</p>
        </div>
        ),
      }
    ],
    "rows": movies
  };

  return (
    <div>
      <DataGrid
        getRowHeight={() => 'auto'}
        autoHeight
        pageSize={5}
        getRowId={(row) => row._id}
        getRowClassName={() => 'movie-row'}
        onRowClick={handleOnCellClick}
        components={{
          NoRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              No items available.
            </Stack>
          )
        }}
        {...data}
      />
    </div>
  )
}

export default List;
