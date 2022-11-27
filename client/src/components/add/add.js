import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle, Button, Checkbox, TextField, FormControlLabel, FormGroup, FormLabel, FormControl, Grid, DialogActions } from '@mui/material';
import { postData, putData } from '../../utils/api';
import { useForm } from "react-hook-form";


/*
 * Purpose: The purpose of this component is to add or udpate item.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Add = (props) => {
    const { id } = props;
    const [open, setOpen] = useState(false);
    const { state = {} } = useLocation();
    console.log(state);
    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: state});

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const onFormSubmit = useCallback((formData) => {
        (id) ? putData(formData) : postData(formData);
        setOpen(false);
    }, [id]);

    return (
        <>
            {id ?
                <Button variant="contained" onClick={(id) => handleOpen()}>Edit</Button> :
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
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <DialogContent dividers>
                        <Grid container direction={"column"} spacing={4}>
                            <Grid item>
                                <TextField required id="name" label="Movie title" variant="outlined" fullWidth {...register('name', { required: 'Title can not be blank.' })} error={!!errors['name']} helperText={errors['name'] ? errors['name'].message : ''} />
                            </Grid>
                            <Grid item>
                                <TextField id="description" label="Movie description" multiline
                                    rows={3} variant="outlined" fullWidth {...register('description')} />
                            </Grid>
                            <Grid item>
                                <TextField id="imdbId" label="IMDB ID" variant="outlined" fullWidth {...register('imdbId')} />
                            </Grid>
                        </Grid>


                        <FormControl component="fieldset" sx={{ m: 3 }} variant="standard">
                            <FormLabel component="legend">Generes</FormLabel>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox value="si-fi" {...register('genres')} />} label="Si Fi" />
                                <FormControlLabel control={<Checkbox value="drama" {...register('genres')} />} label="Drama" />
                                <FormControlLabel control={<Checkbox value="comedy" {...register('genres')} />} label="Comedy" />
                            </FormGroup>
                        </FormControl>
                        <DialogActions>
                            <Button type="submit" sx={{ paddingLeft: 5, paddingRight: 5 }} variant="contained">Save</Button>
                            <Button variant="contained" onClick={() => handleClose()}>Close</Button>
                        </DialogActions>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    )
};
export default Add;