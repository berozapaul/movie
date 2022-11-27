import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Typography, Button } from '@mui/material';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
const baseUrl = process.env.REACT_APP_POSTER_URL;


/*
 * Purpose: The purpose of this component is to render details page.
 *
 * Version: 1.0
 * Author: dev@example.com
 */

const Details = () => {
    const location = useLocation();
    const { name, description, imdbId } = location.state;
    return (
        <>
            <h1 className="inscApp">{name}</h1>
            <Card>
                <CardMedia
                    component="img"
                    image={`${baseUrl}${imdbId}.jpg`}
                    alt={`${name}`}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">{description}</Typography>
                </CardContent>
                <Button href="/" variant="contained">
                    Go back
                </Button>
            </Card>
        </>

    )
};
export default Details;



