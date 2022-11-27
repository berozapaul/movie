import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle, Button, Checkbox, TextField, FormControlLabel, FormGroup, FormLabel, FormControl, Grid, DialogActions } from '@mui/material';
import { postData } from '../../utils/api';


/*
 * Purpose: The purpose of this component is to add or udpate item.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Add = (props) => {
    const { id } = props;
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const saveItem = useCallback(() => {
        const movieTitle = document.getElementById('name').value || '';
        const description = document.getElementById('description').value || '';
        const imdbId = document.getElementById('imdbId').value || '';
        if (!movieTitle)  {
            return false;
        }

        const res = postData({name: movieTitle, description, imdbId });
        navigate('/');
    }, []);


    return (
        <>
            {id ?
                <Button variant="contained" onClick={() => handleOpen()}>Edit</Button> :
                <Button variant="contained" onClick={() => handleOpen()}>Add new</Button>
            }
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                style={{ zIndex: 0 }}>
                <DialogTitle component="h1">
                    {id ? 'Edit' : 'Add new'}
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container direction={"column"} spacing={4}>
                        <Grid item>
                            <TextField required id="name" label="Movie title" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item>
                            <TextField id="description" label="Movie description" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item>
                            <TextField id="imdbId" label="IMDB ID" variant="outlined" fullWidth />
                        </Grid>
                    </Grid>


                    <FormControl component="fieldset" sx={{ m: 3 }} variant="standard">
                        <FormLabel component="legend">Genere</FormLabel>
                        <FormGroup>
                            <FormControlLabel name="genre" control={<Checkbox />} label="Si Fi" />
                            <FormControlLabel name="genre" control={<Checkbox />} label="Romantic" />
                        </FormGroup>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button sx={{ paddingLeft: 5, paddingRight: 5 }} variant="contained" onClick={() => saveItem()}>Save</Button>
                    <Button variant="contained" onClick={() => handleClose()}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
};
export default Add;