import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';


/*
 * Purpose: The purpose of this component is to render nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Header = () =>{
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography>Movie Mania</Typography>
            </Toolbar>
        </AppBar>
   )
};
export default Header;