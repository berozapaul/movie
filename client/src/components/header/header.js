import React, { useCallback } from 'react';
import { AppBar, Toolbar, Typography, Grid, } from '@mui/material';
import Search from '../search/search';


/*
 * Purpose: The purpose of this component is to render nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Header = (props) => {
    const handleClick = useCallback(() => {
        window.location.href = "/";
    }, []);

    const handleSearchData = useCallback((searchData) => {
        props.onSearch(searchData);
    }, [props]);

    return (
        <AppBar position='static'>
            <Toolbar>
                <Grid container spacing={0} alignItems="center">
                    <Grid item xs={6}>
                        <Typography className='movie-logo' onClick={handleClick}>Movie Mania</Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="flex-end">
                        <Search onSearch={handleSearchData}/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};
export default Header;