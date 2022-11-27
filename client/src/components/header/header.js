import React, {useCallback} from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';


/*
 * Purpose: The purpose of this component is to render nav bar.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Header = () =>{
    const handleClick = useCallback(() => {
        window.location.href = "/";
    }, [])
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography className='movie-logo' onClick={handleClick}>Movie Mania</Typography>
            </Toolbar>
        </AppBar>
   )
};
export default Header;