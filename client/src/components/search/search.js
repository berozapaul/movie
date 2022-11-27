import React, { useCallback } from 'react';
import { TextField } from '@mui/material';
import { findData } from '../../utils/api';

/*
 * Purpose: The purpose of this component is to do the search.
 *
 * Version: 1.0
 * Author: dev@example.com
 */


const Search = (props) => {
    const handleKeyUp = useCallback(async (event) => {
        if (event.keyCode === 13) {
            const qry = (event.target).value.trim();
            const data = await findData(qry);
            props.onSearch(data);
        }
    }, [props]);

    return (
        <>
            <TextField
                id="search-bar"
                className="text"
                label="Search movie"
                variant="outlined"
                placeholder="Search..."
                onKeyUp={handleKeyUp}
                size="small"
                sx={{
                    input: {
                        color: "#fff",
                    }
                }}
            />
        </>
    );
};

export default Search;