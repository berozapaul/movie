import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Details from './components/details/details';
// import ErrorMessage from '../ErrorMessage';
/*
 * Purpose: The purpose of this component is to render common routes.
 * Version: 1.0
 */

const URLRoute = () => {
    return (
        <BrowserRouter>
            <Suspense fallback="">
                <Routes>
                    <Route path='/:slug' element={<Details/>} />
                    <Route path='/' exact element={<Home/>} />
                    {/* <Route path="/error" exact component={ErrorMessage}/> */}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
export default URLRoute;

