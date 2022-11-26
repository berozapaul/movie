import React, { useEffect, useState, useRef, useContext } from 'react'
import { Dialog, DialogContent } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './list.css';

import AppContext from '../../context';
const baseUrl = process.env.REACT_APP_POSTER_URL;
console.log(baseUrl);

function List() {
  const context = useContext(AppContext);
  const { movies } = context;

  const [open, setOpen] = useState(false);
  const [activeGif, setActiveGif] = useState('');
  const handleOpen = (clickedGif) => {
    setOpen(true);
    setActiveGif(clickedGif);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnCellClick = (params) => {
    console.log(params);
  };

  const data = {
    "columns": [
      {
        "field": "images",
        "headerName": "Poster",
        "width": 200,
        renderCell: (params) => <a href="#" className='poster' onClick={() => handleOpen(`${baseUrl}${params.row.imdbId}.jpg`)}>
          <img src={`${baseUrl}${params.row.imdbId}.jpg`} width="170" />
        </a>,
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
        {...data}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        style={{ zIndex: 0 }}
      >
        <DialogContent dividers>
          <img src={activeGif} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default List;
