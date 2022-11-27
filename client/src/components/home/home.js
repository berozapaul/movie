import React from 'react';
import { Grid } from '@mui/material';
import List from '../list/list';
import Add from '../add/add';

/*
 * Purpose: The purpose of this component is to render home page.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Home = () => {
    return (
        <div>
            <Grid container spacing={0} alignItems="center">
                <Grid item xs={6}>
                    <h1 className="inscApp">Top Movies</h1>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="flex-end">
                    <Add />
                </Grid>
            </Grid>
            <List />
        </div>
    )
};
export default Home;