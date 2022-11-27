import React, { useState } from 'react';
import { Grid } from '@mui/material';
import List from '../list/list';
import Search from '../search/search';
import Add from '../add/add';

/*
 * Purpose: The purpose of this component is to render home page.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Home = () => {
    const [data, setData] = useState([]);
    const executeSearch = (data) => {
        setData(data);
    };
    return (
        <div>
            <Grid container spacing={0} alignItems="center">
                <Grid item xs={3}>
                    <h1 className="inscApp">Top Movies</h1>
                </Grid>
                <Grid item xs={6}>
                    search
                </Grid>
                <Grid item xs={3} display="flex" justifyContent="flex-end">
                    <Add />
                </Grid>
            </Grid>

            <Search
                onSearch={executeSearch}
            />
            <List />
        </div>
    )
};
export default Home;